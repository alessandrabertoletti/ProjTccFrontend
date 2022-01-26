import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Local } from './local.model';



@Injectable({
    providedIn: 'root'
})
export class LocalService {
    url = "http://localhost:3000/locals"
    salvar = false;
    local: Local = {
        cidade: '',
        estado: '',
        rua: '',
        bairro: '',
        complemento: ''
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
    create(local: Local): Observable<Local> {
        return this.http.post<Local>(this.url, local)
    }
    read(): Observable<Local[]> {
        return this.http.get<Local[]>(this.url);
    }

    update(local: Local): Observable<Local> {
        const urlAlterar = `${this.url}/${local._id}`;
        return this.http.patch<Local>(urlAlterar, local)
    }
    delete(local: Local): Observable<Local> {
        const urlExcluir = `${this.url}/${local._id}`;
        return this.http.delete<Local>(urlExcluir)
    }
}