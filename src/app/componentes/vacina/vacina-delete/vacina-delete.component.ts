import { Router } from '@angular/router';
import { VacinaService } from './../vacina.service';
import { Vacina } from './../vacina.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vacina-delete',
  templateUrl: './vacina-delete.component.html',
  styleUrls: ['./vacina-delete.component.css']
})
export class VacinaDeleteComponent implements OnInit {
  vacina: Vacina = { nome: '', fabricante: '', validade: '' }
  constructor(
    private vacinaService: VacinaService, private router: Router
  ) { }
  ngOnInit(): void {
    this.vacina = this.vacinaService.vacina;
  }
  delete(): void {
    this.vacinaService.delete(this.vacina).subscribe(() => {
      this.vacinaService.showMessage('Vacina excluída com sucesso!')
      this.router.navigate(['/vacinas'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/vacinas'])
  }
}