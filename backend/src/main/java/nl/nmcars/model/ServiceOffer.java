package nl.nmcars.model;

import javax.persistence.*;

@Entity
public class ServiceOffer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String address;
    private double price;

    public ServiceOffer() {

    }

    public ServiceOffer(String oilChange, String fullSyntheticOilAndFilter, String s, double v) {
        this.name = oilChange;
        this.description = fullSyntheticOilAndFilter;
        this.address = s;
        this.price = v;
    }



    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}
