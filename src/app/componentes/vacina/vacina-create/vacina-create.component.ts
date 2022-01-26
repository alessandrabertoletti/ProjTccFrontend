import { Router } from '@angular/router';
import { VacinaService } from './../vacina.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../vacina.model';

@Component({
  selector: 'app-vacina-create',
  templateUrl: './vacina-create.component.html',
  styleUrls: ['./vacina-create.component.css']
})
export class VacinaCreateComponent implements OnInit {
  vacina: Vacina = {
    nome: '', fabricante: '', validade: ''
  }
  constructor(
    private vacinaService: VacinaService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.vacinaService.salvar) {
      this.vacina = { nome: '', fabricante: '', validade: '' }
    } else {
      this.vacina = this.vacinaService.vacina;
    }
  }
  criarVacina(): void {
    if (this.vacinaService.salvar) {
      console.log("valor da variável salvar: ", this.vacinaService.salvar)
      this.vacinaService.create(this.vacina).subscribe(() => {
        this.vacinaService.showMessage('Vacina cadastrada com sucesso!')
        this.router.navigate(['/vacinas'])
      })
    } else {
      this.vacinaService.update(this.vacina).subscribe(() => {
        this.vacinaService.showMessage('Vacina alterada com sucesso!')
        this.router.navigate(['/vacinas'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['/vacinas'])
  }
}

