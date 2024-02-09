package com.example.sample.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.Entity.eventadd;
import com.example.sample.Services.eventservice;


@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/addEventDetails")
class EventController {

    @Autowired
    eventservice r;
// ---------------------CURD OPERATION------------------

@PostMapping("/add/event")
public String addDetails(@RequestBody eventadd m) {
    r.add(m);
    return "Added product " ;
}

@GetMapping("/get/event")
public List<eventadd> showDetails() {
    return r.getDetails();

}
@GetMapping("/get/event/{id}")
public eventadd showDetail(@PathVariable int id) {
    return r.getDetail(id);

}



@PutMapping("/update/event/{id}")
public eventadd Details(@RequestBody eventadd newUser ,@PathVariable int id)
{
     return r.updateDetails(newUser,id);
}

@DeleteMapping("/delete/event/{id}")
public String delete(@PathVariable int id )
{
    r.deleteDetails(id);
    return "your item id "+ "is deleted";
}

}