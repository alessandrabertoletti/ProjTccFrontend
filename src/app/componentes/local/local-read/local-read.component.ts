import { LocalService } from './../local.service';
import { Local } from './../local.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-read',
  templateUrl: './local-read.component.html',
  styleUrls: ['./local-read.component.css']
})
export class LocalReadComponent implements OnInit {
  locals: Local[] = []
  colunas = ['cidade', 'estado', 'rua', 'bairro', 'complemento', 'acoes']

  constructor(private localService: LocalService,
    private router: Router) { }

  ngOnInit(): void {
    this.localService.read().subscribe(locals => {
      this.locals = locals
      console.log(locals)
    })
  }

  editar(local: Local): void {
    console.log("testando editar", local);
    this.localService.salvar = false;
    this.localService.local = local;
    this.router.navigate(['/locals/create'])
  }
  excluir(local: Local): void {
    console.log("testando excluir", local);
    this.localService.local = local;
    this.router.navigate(['/locals/delete'])
  }

}
