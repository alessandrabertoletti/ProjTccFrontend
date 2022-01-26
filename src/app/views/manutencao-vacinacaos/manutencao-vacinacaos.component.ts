import { Component, OnInit } from '@angular/core';
import { VacinacaoService } from 'src/app/componentes/vacinacao/vacinacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manutencao-vacinacaos',
  templateUrl: './manutencao-vacinacaos.component.html',
  styleUrls: ['./manutencao-vacinacaos.component.css']
})
export class ManutencaoVacinacaosComponent implements OnInit {
  constructor(private vacinacaoService: VacinacaoService, private router: Router) { }
  ngOnInit(): void {
  }

  
  navegarVacinacaoCreate(): void{
    this.vacinacaoService.salvar = true;
    this.router.navigate(['/vacinacaos/create'])
    }
    
    
}