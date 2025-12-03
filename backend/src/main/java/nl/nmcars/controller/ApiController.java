package nl.nmcars.controller;

import nl.nmcars.model.ServiceOffer;
import nl.nmcars.repo.ServiceOfferRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {
        "http://localhost:5173", // local dev frontend
        "https://nmcars-frontend.onrender.com",// deployed frontend
        "https://nmcars.net",
        "https://www.nmcars.net"
})
public class ApiController {

    private final ServiceOfferRepository repo;

    public ApiController(ServiceOfferRepository repo) {
        this.repo = repo;
    }

    // Get all services
    @GetMapping("/services")
    public List<ServiceOffer> allServices() {
        return repo.findAll();
    }

    // Search services by address, q is optional
    @GetMapping("/search")
    public List<ServiceOffer> searchByAddress(@RequestParam(value = "q", required = false) String q) {
        if (q == null || q.trim().isEmpty()) {
            return repo.findAll();
        }
        return repo.findByAddressContainingIgnoreCase(q.trim());
    }

    // Health check endpoint
    @GetMapping("/health")
    public String healthCheck() {
        return "NM Cars Backend is running!";
    }
}
