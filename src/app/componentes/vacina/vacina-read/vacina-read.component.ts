import { Component, OnInit } from '@angular/core';
import { VacinaService } from './../vacina.service';
import { Vacina } from './../vacina.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-read',
  templateUrl: './vacina-read.component.html',
  styleUrls: ['./vacina-read.component.css']
})
export class VacinaReadComponent implements OnInit {
  vacinas: Vacina[] = []
  colunas = ['nome', 'fabricante', 'validade', 'acoes']

  constructor(private vacinaService: VacinaService,
    private router: Router) { }

  ngOnInit(): void {
    this.vacinaService.read().subscribe(vacinas => {
      this.vacinas = vacinas
      console.log(vacinas)
    })
  }

  editar(vacina: Vacina): void {
    console.log("testando editar", vacina);
    this.vacinaService.salvar = false;
    this.vacinaService.vacina = vacina;
    this.router.navigate(['/vacinas/create'])
  }
  excluir(vacina: Vacina): void {
    console.log("testando excluir", vacina);
    this.vacinaService.vacina = vacina;
    this.router.navigate(['/vacinas/delete'])
  }

}
