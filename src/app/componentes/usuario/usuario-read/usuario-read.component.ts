import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = []
  colunas = ['nome', 'dataNascimento', 'sexo', 'acoes']

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios)
    })
  }
  editar(usuario: Usuario): void {
    console.log("testando editar", usuario);
    this.usuarioService.salvar = false;
    this.usuarioService.usuario = usuario;
    this.router.navigate(['/usuarios/create'])

  }

  excluir(usuario: Usuario): void {
    console.log("testando excluir", usuario);
    this.usuarioService.usuario = usuario;
    this.router.navigate(['/usuarios/delete'])

  }
}
