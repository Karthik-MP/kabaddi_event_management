package io.kabadi.league.Admin.Auth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long>{

    Admin findByEmail(String email);
    
}
