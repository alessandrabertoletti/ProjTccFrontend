import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  usuario: Usuario = {
    nome: '', dataNascimento: '', sexo: ''
  }
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.usuarioService.salvar) {
      this.usuario = { nome: '', dataNascimento: '', sexo: '' }
    } else {
      this.usuario = this.usuarioService.usuario;
    }
  }
  criarUsuario(): void {
    if (this.usuarioService.salvar) {
      console.log("valor da variável salvar: ", this.usuarioService.salvar)
      this.usuarioService.create(this.usuario).subscribe(() => {
        this.usuarioService.showMessage('Usuario cadastrado com sucesso!')
        this.router.navigate(['/usuarios'])
      })
    } else {
      this.usuarioService.update(this.usuario).subscribe(() => {
        this.usuarioService.showMessage('Usuario alterado com sucesso!')
        this.router.navigate(['/usuarios'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['/usuarios'])
  }
}
