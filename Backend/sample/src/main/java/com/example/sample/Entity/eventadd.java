package com.example.sample.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//To use the @Data annotation you should add the Lombok dependency.

@Entity
@Table(name="book")
public class eventadd {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String description;
    private int totalpackage;
    private int count;
    private int chargers;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getTotalpackage() {
        return totalpackage;
    }
    public void setTotalpackage(int totalpackage) {
        this.totalpackage = totalpackage;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public int getChargers() {
        return chargers;
    }
    public void setChargers(int chargers) {
        this.chargers = chargers;
    }
    public eventadd()
    {

    }
   
    public eventadd(int id, String type, String description, int totalpackage, int count, int chargers) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.totalpackage = totalpackage;
        this.count = count;
        this.chargers = chargers;
    }
    
  

}