package com.example.sample.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Entity.book;
import com.example.sample.Repo.repo;



@Service
public class service {
	
	@Autowired(required=true)
	repo r;
	
	public String add(book e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<book> getDetails()
	{
		return r.findAll();
	}
	
	
	
	
	
	// public book updateDetails(book newUser ,int id) 
	// {
	// 	book up=r.findById(id).get();		
	// 	 up.setUsername(newUser.getUsername());
	// 	 up.setName(newUser.getName());
	// 	 up.setEmail(newUser.getEmail());
	// 	 up.setTax(newUser.getTax());
    //      return r.saveAndFlush(up);
	// }
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	// public book getDetail(int id) {
	// 	return r.findById(id).get();
	// }
	

}
