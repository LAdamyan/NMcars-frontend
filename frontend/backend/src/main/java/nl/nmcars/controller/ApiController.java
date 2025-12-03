package nl.nmcars.controller;


import nl.nmcars.model.ServiceOffer;
import nl.nmcars.repo.ServiceOfferRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class ApiController {
    private final ServiceOfferRepository repo;
    public ApiController(ServiceOfferRepository repo) { this.repo = repo; }

    @GetMapping("/services")
    public List<ServiceOffer> allServices() { return repo.findAll(); }

    @GetMapping("/search")
    public List<ServiceOffer> searchByAddress(@RequestParam("q") String q) {
        if (q == null || q.trim().isEmpty()) return repo.findAll();
        return repo.findByAddressContainingIgnoreCase(q.trim());
    }
}