package io.kabadi.league.User.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    UserRepository urepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
       
        User user=urepo.findByEmail(email); 

        if(null==user){
            throw new UsernameNotFoundException("User not found wiyh this email"+email);
        }

        return user;
    }
    
}
