package main.java.com.example.contactform.model;




//To use the @Data annotation you should add the Lombok dependency.
@Data
@Entity
class entityClassName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private long mobilenumber;
    private String query;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public long getMobilenumber() {
        return mobilenumber;
    }
    public void setMobilenumber(long mobilenumber) {
        this.mobilenumber = mobilenumber;
    }
    public String getQuery() {
        return query;
    }
    public void setQuery(String query) {
        this.query = query;
    }

    
}