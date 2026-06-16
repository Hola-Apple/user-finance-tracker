package com.anoushka.user_finance_tracker.repository;

import com.anoushka.user_finance_tracker.model.Finance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FinanceRepository extends JpaRepository<Finance, Long> {
    List<Finance> findByDateBetween(LocalDate startDate, LocalDate endDate);
    List<Finance> findByUserId(Long userId);
}

