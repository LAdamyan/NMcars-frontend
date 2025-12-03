package nl.nmcars;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import nl.nmcars.model.ServiceOffer;
import nl.nmcars.repo.ServiceOfferRepository;

@Component
public class DataLoader implements CommandLineRunner {

    private final ServiceOfferRepository repository;

    public DataLoader(ServiceOfferRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.save(new ServiceOffer("Oil change", "Full synthetic oil and filter", "Main Street 12, Amsterdam", 59.99));
        repository.save(new ServiceOffer("Tire replacement", "Replace tires with new ones", "Main Street 12, Amsterdam", 89.99));
        repository.save(new ServiceOffer("Car wash", "Complete exterior and interior wash", "Main Street 12, Amsterdam", 29.99));
    }
}
