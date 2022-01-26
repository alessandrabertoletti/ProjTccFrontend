import { Router } from '@angular/router';
import { LocalService } from './../local.service';
import { Local } from './../local.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-delete',
  templateUrl: './local-delete.component.html',
  styleUrls: ['./local-delete.component.css']
})
export class LocalDeleteComponent implements OnInit {
  local: Local = { cidade: '', estado: '', rua: '', bairro: '', complemento: '' }
  constructor(
    private localService: LocalService, private router: Router
  ) { }
  ngOnInit(): void {
    this.local = this.localService.local;
  }
  delete(): void {
    this.localService.delete(this.local).subscribe(() => {
      this.localService.showMessage('Local excluído com sucesso!')
      this.router.navigate(['/locals'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/locals'])
  }
}