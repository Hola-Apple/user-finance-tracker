package com.anoushka.user_finance_tracker.service;

import com.anoushka.user_finance_tracker.model.Finance;
import com.anoushka.user_finance_tracker.repository.FinanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class FinanceService {

    private final FinanceRepository financeRepository;

    @Autowired
    public FinanceService(FinanceRepository financeRepository) {
        this.financeRepository = financeRepository;
    }


    public Finance createFinance(Finance finance) {
        return financeRepository.save(finance);
    }

    public List<Finance> getExpensesByDateRange(LocalDate startDate, LocalDate endDate) {
        return financeRepository.findByDateBetween(startDate, endDate);
    }

    public BigDecimal getTotalIncome(LocalDate startDate, LocalDate endDate) {
        return financeRepository.findByDateBetween(startDate, endDate).stream()
            .filter(e -> "INCOME".equalsIgnoreCase(e.getType()))
            .map(Finance::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public BigDecimal getTotalExpenses(LocalDate startDate, LocalDate endDate) {
        return financeRepository.findByDateBetween(startDate, endDate).stream()
            .filter(e -> "EXPENSE".equalsIgnoreCase(e.getType()))
            .map(Finance::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public List<Finance> getFinancesByUser(Long userId) {
        return financeRepository.findByUserId(userId);
    }
}
