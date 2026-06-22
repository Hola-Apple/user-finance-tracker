package com.anoushka.user_finance_tracker.config;

import com.anoushka.user_finance_tracker.model.User;
import com.anoushka.user_finance_tracker.model.Finance;
import com.anoushka.user_finance_tracker.repository.UserRepository;
import com.anoushka.user_finance_tracker.repository.FinanceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;

//Creating sample data
@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(
            UserRepository userRepository,
            FinanceRepository financeRepository) {

        return args -> {

            if (userRepository.count() == 0) {

                User user = new User();
                user.setName("Default User");
                user = userRepository.save(user);

                Finance income = new Finance();
                income.setDescription("Salary");
                income.setAmount(new BigDecimal("5000"));
                income.setDate(LocalDate.now());
                income.setType("INCOME");
                income.setUser(user);

                Finance expense = new Finance();
                expense.setDescription("Rent");
                expense.setAmount(new BigDecimal("1200"));
                expense.setDate(LocalDate.now());
                expense.setType("EXPENSE");
                expense.setUser(user);

                financeRepository.save(income);
                financeRepository.save(expense);

                System.out.println("✅ Sample data created");
            }
        };
    }
}