package com.example.sample.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Entity.eventadd;
import com.example.sample.Repo.eventrepo;



@Service
public class eventservice {

    @Autowired(required=true)
	eventrepo r;
	
	public String add(eventadd e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<eventadd> getDetails()
	{
		return r.findAll();
	}
	
	public eventadd updateDetails(eventadd newUser ,int id) 
	{
		eventadd up=r.findById(id).get();		
		 up.setType(newUser.getType());
		 up.setDescription(newUser.getDescription());
		 up.setTotalpackage(newUser.getTotalpackage());
		 up.setCount(newUser.getCount());
		 up.setChargers(newUser.getChargers());
         return r.saveAndFlush(up);
	}
	
   
	
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public eventadd getDetail(int id) {
	
		return r.findById(id).get();
	}

    
}
