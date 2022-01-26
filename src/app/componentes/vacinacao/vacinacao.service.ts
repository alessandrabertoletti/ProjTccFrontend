import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Vacinacao } from './vacinacao.model';



@Injectable({
    providedIn: 'root'
})
export class VacinacaoService {
    url = "http://localhost:3000/vacinacaos"
    salvar = false;
    vacinacao: Vacinacao = {
        lotedose: '',
        datavacinacao: '',
        proximadose: ''
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
    create(vacinacao: Vacinacao): Observable<Vacinacao> {
        console.log(vacinacao)
        return this.http.post<Vacinacao>(this.url, vacinacao)

    }

    read(): Observable<Vacinacao[]> {
        return this.http.get<Vacinacao[]>(this.url);
    }

    update(vacinacao: Vacinacao): Observable<Vacinacao> {
        const urlAlterar = `${this.url}/${vacinacao._id}`;
        return this.http.patch<Vacinacao>(urlAlterar, vacinacao)
    }

    delete(vacinacao: Vacinacao): Observable<Vacinacao> {
        const urlExcluir = `${this.url}/${vacinacao._id}`;
        return this.http.delete<Vacinacao>(urlExcluir)
    }
}