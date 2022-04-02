package io.kabadi.league.Admin.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminService implements UserDetailsService{

    @Autowired
    AdminRepository urepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
       
        Admin admin=urepo.findByEmail(email); 

        if(null==admin){
            throw new UsernameNotFoundException("Admin not found wiyh this email"+email);
        }

        return admin;
    }
    
}