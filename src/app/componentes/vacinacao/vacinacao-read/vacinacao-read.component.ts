import { Component, OnInit } from '@angular/core';
import { VacinacaoService } from './../vacinacao.service';
import { Vacinacao } from './../vacinacao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacinacao-read',
  templateUrl: './vacinacao-read.component.html',
  styleUrls: ['./vacinacao-read.component.css']
})
export class VacinacaoReadComponent implements OnInit {
  vacinacaos: Vacinacao[] = []
  colunas = ['lotedose', 'datavacinacao', 'proximadose', 'acoes']

  constructor(private vacinacaoService: VacinacaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.vacinacaoService.read().subscribe(vacinacaos => {
      this.vacinacaos = vacinacaos
      console.log(vacinacaos)
    })
  }

  editar(vacinacao: Vacinacao): void {
    console.log("testando editar", vacinacao);
    this.vacinacaoService.salvar = false;
    this.vacinacaoService.vacinacao = vacinacao;
    this.router.navigate(['/vacinacaos/create'])
  }
  excluir(vacinacao: Vacinacao): void {
    console.log("testando excluir", vacinacao);
    this.vacinacaoService.vacinacao = vacinacao;
    this.router.navigate(['/vacinacaos/delete'])
  }

}
