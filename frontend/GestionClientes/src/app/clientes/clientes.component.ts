import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import ClientesModel from '../model/clientesmodel';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClientesModel[] = [];

  nuevoCliente: Partial<ClientesModel> = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    estado: true
  };

  clienteActualizar: Partial<ClientesModel> = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    estado: true
  };

  busqueda: string = '';

  mostrarMenu: boolean = false;

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clientesService.listarClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error("❌ Error al cargar clientes:", err);
      }
    });
  }

  eliminarCliente(id: number): void {
    this.clientesService.eliminarCliente(id).subscribe({
      next: () => this.listarClientes(),
      error: (err) => console.error("❌ Error al eliminar:", err)
    });
  }

  agregarCliente(): void {
    if (!this.nuevoCliente.nombre || !this.nuevoCliente.apellido || !this.nuevoCliente.correo) {
      alert("⚠️ Nombre, apellido y correo son obligatorios.");
      return;
    }

    this.clientesService.agregarCliente(this.nuevoCliente as ClientesModel).subscribe({
      next: () => {
        this.listarClientes();
        this.nuevoCliente = { nombre: '', apellido: '', correo: '', telefono: '', estado: true };
        alert("✅ Cliente agregado correctamente");
      },
      error: (err) => console.error("❌ Error al agregar:", err)
    });
  }

  cargarClienteParaActualizar(): void {
    if (!this.clienteActualizar.id) return;

    this.clientesService.buscarCliente(this.clienteActualizar.id).subscribe({
      next: (cliente) => {
        if (cliente) {
          this.clienteActualizar = { ...cliente };
        } else {
          alert("⚠️ Cliente no encontrado");
        }
      },
      error: () => {
        alert("❌ No se encontró un cliente con ese ID");
      }
    });
  }

  actualizarCliente(): void {
    if (!this.clienteActualizar.id) {
      alert("⚠️ Debes ingresar el ID del cliente a actualizar");
      return;
    }

    this.clientesService.actualizarCliente(this.clienteActualizar.id, this.clienteActualizar as ClientesModel).subscribe({
      next: () => {
        this.listarClientes();
        this.clienteActualizar = { id: 0, nombre: '', apellido: '', correo: '', telefono: '', estado: true };
        alert("✅ Cliente actualizado correctamente");
      },
      error: (err) => console.error("❌ Error al actualizar:", err)
    });
  }

  buscarCliente(): void {
    if (!this.busqueda.trim()) {
      this.listarClientes();
      return;
    }

    const id = Number(this.busqueda);
    if (!isNaN(id)) {
      this.clientesService.buscarCliente(id).subscribe({
        next: (cliente) => {
          this.clientes = cliente ? [cliente] : [];
        },
        error: (err) => console.error("❌ Error en búsqueda:", err)
      });
    } else {
      alert("⚠️ La búsqueda solo admite ID numérico");
    }
  }
}
