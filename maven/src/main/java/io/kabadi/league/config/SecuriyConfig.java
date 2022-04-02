package io.kabadi.league.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import io.kabadi.league.Admin.Auth.AdminService;
import io.kabadi.league.User.Auth.UserService;

@Configuration
@EnableWebSecurity
public class SecuriyConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    private UserService userDetailsService;

    @Autowired
    private AdminService adminDetailsService;

    @Autowired
    private JWTTokenHelper jwtTokenHelper;

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;


    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){return NoOpPasswordEncoder.getInstance();}

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
            .authenticationEntryPoint(authenticationEntryPoint).and()
            .authorizeRequests((request) -> request.antMatchers("/admin/**","/user/**").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
            .addFilterBefore(new JWTAuthenticationFilter(userDetailsService, jwtTokenHelper),
                UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthenticationFilter(adminDetailsService, jwtTokenHelper),
                UsernamePasswordAuthenticationFilter.class);

        http.csrf().disable().cors().and().headers().frameOptions().disable();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
       //In-memory
       auth.inMemoryAuthentication().withUser("admin").password("admin@1234").authorities("USER","ADMIN");

       //db auth
       auth.userDetailsService(userDetailsService);

       auth.userDetailsService(adminDetailsService);
    }

    
    
    
}
