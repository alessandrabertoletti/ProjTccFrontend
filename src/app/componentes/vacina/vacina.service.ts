import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Vacina } from './vacina.model';



@Injectable({
    providedIn: 'root'
})
export class VacinaService {
    url = "http://localhost:3000/vacinas"
    salvar = false;
    vacina: Vacina = {
        nome: '',
        fabricante: '',
        validade: ''
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
    create(vacina: Vacina): Observable<Vacina> {
        return this.http.post<Vacina>(this.url, vacina)
    }

    read(): Observable<Vacina[]> {
        return this.http.get<Vacina[]>(this.url);
    }

    update(vacina: Vacina): Observable<Vacina> {
        const urlAlterar = `${this.url}/${vacina._id}`;
        return this.http.patch<Vacina>(urlAlterar, vacina)
    }

    delete(vacina: Vacina): Observable<Vacina> {
        const urlExcluir = `${this.url}/${vacina._id}`;
        return this.http.delete<Vacina>(urlExcluir)
    }

}