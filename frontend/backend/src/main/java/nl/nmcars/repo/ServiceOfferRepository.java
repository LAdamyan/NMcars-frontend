package nl.nmcars.repo;

import nl.nmcars.model.ServiceOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceOfferRepository extends JpaRepository<ServiceOffer, Long> {
    List<ServiceOffer> findByAddressContainingIgnoreCase(String fragment);
}