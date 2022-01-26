import { Router } from '@angular/router';
import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';
import { Local } from '../local.model';

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.css']
})
export class LocalCreateComponent implements OnInit {
  local: Local = {
    cidade: '', estado: '', rua: '', bairro: '', complemento: ''
  }
  constructor(
    private localService: LocalService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.localService.salvar) {
      this.local = { cidade: '', estado: '', rua: '', bairro: '', complemento: '' }
    } else {
      this.local = this.localService.local;
    }
  }
  criarLocal(): void {
    if (this.localService.salvar) {
      console.log("valor da variável salvar: ", this.localService.salvar)
      this.localService.create(this.local).subscribe(() => {
        this.localService.showMessage('Local cadastrado com sucesso!')
        this.router.navigate(['/locals'])
      })

    } else {
      this.localService.update(this.local).subscribe(() => {
        this.localService.showMessage('Local alterado com sucesso!')
        this.router.navigate(['/locals'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['/locals'])
  }

}
