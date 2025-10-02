package pe.gestionclientes.service;

import pe.gestionclientes.model.Cliente;
import java.util.List;

public interface ClienteService {
    List<Cliente> listarTodos();
    Cliente obtenerPorId(Long id);
    Cliente crear(Cliente cliente);
    Cliente actualizar(Long id, Cliente cliente);
    void eliminar(Long id);
}
