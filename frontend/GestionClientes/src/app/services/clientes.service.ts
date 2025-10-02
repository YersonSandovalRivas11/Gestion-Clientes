import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ClientesModel from '../model/clientesmodel';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  listarClientes(): Observable<ClientesModel[]> {
    return this.http.get<ClientesModel[]>(this.apiUrl);
  }

  buscarCliente(id: number): Observable<ClientesModel> {
    return this.http.get<ClientesModel>(`${this.apiUrl}/${id}`);
  }

  agregarCliente(cliente: ClientesModel): Observable<ClientesModel> {
    return this.http.post<ClientesModel>(this.apiUrl, cliente);
  }

  actualizarCliente(id: number, cliente: ClientesModel): Observable<ClientesModel> {
    return this.http.put<ClientesModel>(`${this.apiUrl}/${id}`, cliente);
  }

  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
