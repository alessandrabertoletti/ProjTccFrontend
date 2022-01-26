import { Router } from '@angular/router';
import { VacinacaoService } from './../vacinacao.service';
import { Vacinacao } from './../vacinacao.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vacinacao-delete',
  templateUrl: './vacinacao-delete.component.html',
  styleUrls: ['./vacinacao-delete.component.css']
})
export class VacinacaoDeleteComponent implements OnInit {
  vacinacao: Vacinacao = { lotedose: '', datavacinacao: '', proximadose: '' }
  constructor(
    private vacinacaoService: VacinacaoService, private router: Router
  ) { }
  ngOnInit(): void {
    this.vacinacao = this.vacinacaoService.vacinacao;
  }
  delete(): void {
    this.vacinacaoService.delete(this.vacinacao).subscribe(() => {
      this.vacinacaoService.showMessage('Dados excluídos com sucesso!')
      this.router.navigate(['/vacinacaos'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/vacinacaos'])
  }
}