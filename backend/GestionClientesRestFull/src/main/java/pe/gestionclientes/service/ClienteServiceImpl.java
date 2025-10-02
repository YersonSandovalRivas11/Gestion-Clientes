package pe.gestionclientes.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gestionclientes.exception.ResourceNotFoundException;
import pe.gestionclientes.model.Cliente;
import pe.gestionclientes.repository.ClienteRepository;

import java.util.List;

@Service
@Transactional
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository repo;

    public ClienteServiceImpl(ClienteRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Cliente> listarTodos() {
        return repo.findAllByOrderByIdAsc();
    }

    @Override
    public Cliente obtenerPorId(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado con id: " + id));
    }

    @Override
    public Cliente crear(Cliente cliente) {
        if (repo.existsByCorreo(cliente.getCorreo())) {
            throw new IllegalArgumentException("El correo ya está registrado");
        }
        return repo.save(cliente);
    }

    @Override
    public Cliente actualizar(Long id, Cliente cliente) {
        Cliente existente = obtenerPorId(id);
        existente.setNombre(cliente.getNombre());
        existente.setApellido(cliente.getApellido());
        existente.setCorreo(cliente.getCorreo());
        existente.setTelefono(cliente.getTelefono());
        existente.setEstado(cliente.getEstado());
        return repo.save(existente);
    }

    @Override
    public void eliminar(Long id) {
        Cliente existente = obtenerPorId(id);
        repo.delete(existente);
    }
}
