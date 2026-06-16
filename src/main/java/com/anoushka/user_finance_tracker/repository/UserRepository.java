package com.anoushka.user_finance_tracker.repository;

import com.anoushka.user_finance_tracker.model.User;

//import jakarta.persistence.Entity;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods if needed
}
