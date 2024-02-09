package com.example.sample.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.Entity.book;



@Repository
public interface repo extends JpaRepository<book, Integer>{

   




}