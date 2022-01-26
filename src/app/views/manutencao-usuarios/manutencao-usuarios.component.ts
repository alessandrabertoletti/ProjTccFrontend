import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/componentes/usuario/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manutencao-usuarios',
  templateUrl: './manutencao-usuarios.component.html',
  styleUrls: ['./manutencao-usuarios.component.css']
})
export class ManutencaoUsuariosComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit(): void {
  }

  
  navegarUsuarioCreate(): void{
    this.usuarioService.salvar = true;
    this.router.navigate(['/usuarios/create'])
    }
    
    
}