package com.anoushka.user_finance_tracker.config;

import com.anoushka.user_finance_tracker.model.Finance;
import com.anoushka.user_finance_tracker.model.User;
import com.anoushka.user_finance_tracker.repository.FinanceRepository;
import com.anoushka.user_finance_tracker.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(
            UserRepository userRepository,
            FinanceRepository financeRepository) {

        return args -> {

            // Only seed data if the database is empty
            //userRepository.count() == 0
            if (true) {

                User user = new User();
                user.setName("Default User");
                user.setEmail("default@example.com");
                user.setPhone("1234567890");
                user.setAddress("123 Main St, Anytown, USA");

                user = userRepository.save(user);

                Finance income = new Finance();
                income.setDescription("Monthly Salary");
                income.setAmount(new BigDecimal("5000"));
                income.setDate(LocalDate.now());
                income.setType("INCOME");
                income.setUser(user);

                Finance expense1 = new Finance();
                expense1.setDescription("Rent");
                expense1.setAmount(new BigDecimal("1200"));
                expense1.setDate(LocalDate.now());
                expense1.setType("EXPENSE");
                expense1.setUser(user);

                Finance expense2 = new Finance();
                expense2.setDescription("Groceries");
                expense2.setAmount(new BigDecimal("250"));
                expense2.setDate(LocalDate.now());
                expense2.setType("EXPENSE");
                expense2.setUser(user);

                financeRepository.save(income);
                financeRepository.save(expense1);
                financeRepository.save(expense2);

                System.out.println("✅ Sample data created successfully");
            }
        };
    }
}