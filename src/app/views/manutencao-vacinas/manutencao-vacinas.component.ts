import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacinaService } from 'src/app/componentes/vacina/vacina.service';

@Component({
  selector: 'app-manutencao-vacinas',
  templateUrl: './manutencao-vacinas.component.html',
  styleUrls: ['./manutencao-vacinas.component.css']
})
export class ManutencaoVacinasComponent implements OnInit {

  constructor(private vacinaService: VacinaService, private router: Router) { }

  ngOnInit(): void {
  }

  navegarVacinaCreate(): void{
    this.vacinaService.salvar = true;
    this.router.navigate(['/vacinas/create'])
    }

}
