package io.kabadi.league.Controllers;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.kabadi.league.Admin.Auth.Admin;
import io.kabadi.league.Admin.Auth.AdminRepository;
import io.kabadi.league.Request.AuthRequest;
import io.kabadi.league.Request.LoginResponse;
import io.kabadi.league.User.Auth.User;
import io.kabadi.league.User.Auth.UserRepository;
import io.kabadi.league.config.JWTTokenHelper;

@RestController
@RequestMapping("/")
@CrossOrigin
public class AuthController {
    @Autowired
    private UserRepository repo;

    @Autowired
    private AdminRepository arepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @PostMapping("user/login")
    public ResponseEntity<?> isUserPresent(@RequestBody AuthRequest authRequest ) throws InvalidKeySpecException, NoSuchAlgorithmException{

        final Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            authRequest.getEmail(), authRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user=(User)authentication.getPrincipal();
            String jwtToken=jwtTokenHelper.generateToken(user.getUserName());

            LoginResponse response=new LoginResponse();
            response.setToken(jwtToken);

        return ResponseEntity.ok(response);
    }

    @PostMapping("admin/login")
    public ResponseEntity<?> isAdminPresent(@RequestBody AuthRequest authRequest ) throws InvalidKeySpecException, NoSuchAlgorithmException{

        final Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            authRequest.getEmail(), authRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            Admin admin=(Admin)authentication.getPrincipal();
            String jwtToken=jwtTokenHelper.generateToken(admin.getUsername());

            LoginResponse response=new LoginResponse();
            response.setToken(jwtToken);
        System.out.print("sad");
        return ResponseEntity.ok(response);
    }

    @PostMapping("user/signup")
    public String saveUser(@RequestBody User user){
        repo.save(user);
        return "User added Sucessfully";
    }

    @PostMapping("admin/signup")
    public Admin saveAdmin(@RequestBody Admin admin){
        return arepo.save(admin);
    }

    @GetMapping("user/get")
    public List<User> get(){
        return repo.findAll();
    }
    
    @GetMapping("admin/get")
    public List<Admin> aget(){
        return arepo.findAll();
    }
}
