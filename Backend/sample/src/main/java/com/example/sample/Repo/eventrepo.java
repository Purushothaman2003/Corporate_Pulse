package com.example.sample.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.Entity.eventadd;
@Repository
public interface eventrepo extends JpaRepository<eventadd, Integer>{
    
}