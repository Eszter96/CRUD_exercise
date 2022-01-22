package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Employee;

// No need for Repository Annotation because the class extends JpaRepository, which takes care of this
// To parameters are required by JpaRepository: <Entity class, Type of the primary key>
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	// This will handle the CRUD
}
