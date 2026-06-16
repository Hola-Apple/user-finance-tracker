package com.anoushka.user_finance_tracker.controller;

import com.anoushka.user_finance_tracker.dto.FinanceRequest;
import com.anoushka.user_finance_tracker.model.User;
import com.anoushka.user_finance_tracker.model.Finance;
import com.anoushka.user_finance_tracker.service.UserService;
import com.anoushka.user_finance_tracker.service.FinanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/finances")
public class FinanceController {

    private final FinanceService financeService;
    private final UserService userService;

    @Autowired
    public FinanceController(FinanceService financeService, UserService userService) {
        this.financeService = financeService;
        this.userService = userService;
    }

    @PostMapping
public ResponseEntity<Finance> createExpense(@RequestBody FinanceRequest request) {

    Finance finance = new Finance();
    finance.setDescription(request.getDescription());
    finance.setAmount(request.getAmount());
    finance.setDate(request.getDate());
    finance.setType(request.getType());

    User user = userService.getUserById(request.getUserId());
    finance.setUser(user);

    Finance created = financeService.createFinance(finance);

    return new ResponseEntity<>(created, HttpStatus.CREATED);
}

    @GetMapping("/range")
    public ResponseEntity<List<Finance>> getExpensesByDateRange(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate) {

        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        List<Finance> expenses = financeService.getExpensesByDateRange(start, end);
        return ResponseEntity.ok(expenses);
    }

    @GetMapping("/income")
    public ResponseEntity<BigDecimal> getTotalIncome(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate) {

        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        BigDecimal totalIncome = financeService.getTotalIncome(start, end);
        return ResponseEntity.ok(totalIncome);
    }

    @GetMapping("/expenses")
    public ResponseEntity<BigDecimal> getTotalExpenses(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate) {

        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        BigDecimal totalExpenses = financeService.getTotalExpenses(start, end);
        return ResponseEntity.ok(totalExpenses);
    }
    
    @GetMapping("/user/{userId}")
	public ResponseEntity<List<Finance>> getFinancesByUser(@PathVariable Long userId) {
	    List<Finance> finances = financeService.getFinancesByUser(userId);
	    return ResponseEntity.ok(finances);
	}
}
