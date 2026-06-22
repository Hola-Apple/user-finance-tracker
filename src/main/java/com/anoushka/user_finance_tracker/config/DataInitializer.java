package com.anoushka.user_finance_tracker.config;

import com.anoushka.user_finance_tracker.model.User;
import com.anoushka.user_finance_tracker.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {

            // If no users exist, create a default one
            if (userRepository.count() == 0) {
                User user = new User();
                user.setName("Default User");

                userRepository.save(user);

                System.out.println("✅ Default user created");
            }
        };
    }
}