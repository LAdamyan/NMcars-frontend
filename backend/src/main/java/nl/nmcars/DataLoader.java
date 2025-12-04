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
        repository.save(new ServiceOffer("Kleine onderhoudsbeurt", null,null,200-600));
        repository.save(new ServiceOffer("Grote onderhoudsbeurt", null,null, 100-250));
        repository.save(new ServiceOffer("Motor reparatie", null,null, 0));
        repository.save(new ServiceOffer("Elektrische werkzaamheden", null,null, 0));
        repository.save(new ServiceOffer("Distributierem vervangen ", null,null, 300-1000));
        repository.save(new ServiceOffer("Distributieketting vervangen ", null,null, 700-2000));
    }
}
