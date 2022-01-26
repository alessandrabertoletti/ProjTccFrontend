import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';



@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    url = "http://localhost:3000/usuarios"
    salvar = false;
    usuario: Usuario = {
        nome: '',
        dataNascimento: '',
        sexo: ''
    }

    constructor(
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }
    create(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.url, usuario)
    }

    read(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url);
    }

    update(usuario: Usuario): Observable<Usuario> {
        const urlAlterar = `${this.url}/${usuario._id}`;
        return this.http.patch<Usuario>(urlAlterar, usuario)
    }

    delete(usuario: Usuario): Observable<Usuario> {
        const urlExcluir = `${this.url}/${usuario._id}`;
        return this.http.delete<Usuario>(urlExcluir)
        }
}