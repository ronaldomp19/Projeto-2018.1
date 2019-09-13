import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private db = environment.serveAPI;

  constructor(
    protected http:HttpClient
  ) { }

  save(usuario:Usuario){
    return this.http.post(this.db + "usuarios", usuario)
  }

  getAll(){
    return this.http.get(this.db + "usuarios")
  }
}
