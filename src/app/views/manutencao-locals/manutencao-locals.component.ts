import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/componentes/local/local.service';
@Component({
  selector: 'app-manutencao-locals',
  templateUrl: './manutencao-locals.component.html',
  styleUrls: ['./manutencao-locals.component.css']
})
export class ManutencaoLocalsComponent implements OnInit {

  constructor(private localService: LocalService, private router: Router) { }
  ngOnInit(): void {
  }

  navegarLocalCreate(): void{
    this.localService.salvar = true;
    this.router.navigate(['/locals/create'])
    }
}
