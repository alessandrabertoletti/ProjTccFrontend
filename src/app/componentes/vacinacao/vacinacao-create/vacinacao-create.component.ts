import { Router } from '@angular/router';
import { VacinacaoService } from './../vacinacao.service';
import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../vacinacao.model';
@Component({
  selector: 'app-vacinacao-create',
  templateUrl: './vacinacao-create.component.html',
  styleUrls: ['./vacinacao-create.component.css']
})
export class VacinacaoCreateComponent implements OnInit {
  vacinacao: Vacinacao = {
    lotedose: '', datavacinacao: '', proximadose: ''
  }
  constructor(
    private vacinacaoService: VacinacaoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.vacinacaoService.salvar) {
      this.vacinacao = { lotedose: '', datavacinacao: '', proximadose: '' }
    } else {
      this.vacinacao = this.vacinacaoService.vacinacao;
    }
  }
  criarVacinacao(): void {
    if (this.vacinacaoService.salvar) {
      console.log("valor da variável salvar: ", this.vacinacaoService.salvar)
      this.vacinacaoService.create(this.vacinacao).subscribe(() => {
        this.vacinacaoService.showMessage('Dados cadastrado com sucesso!')
        this.router.navigate(['/vacinacaos'])
      })
    } else {
      this.vacinacaoService.update(this.vacinacao).subscribe(() => {
        this.vacinacaoService.showMessage('Dados alterado com sucesso!')
        this.router.navigate(['/vacinacaos'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['/vacinacaos'])
  }
}
