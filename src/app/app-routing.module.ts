import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreateComponent } from './componentes/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './componentes/usuario/usuario-delete/usuario-delete.component';
import { HomeComponent } from './views/home/home.component';
import { ManutencaoUsuariosComponent } from './views/manutencao-usuarios/manutencao-usuarios.component';
import { ManutencaoVacinasComponent } from './views/manutencao-vacinas/manutencao-vacinas.component';
import { ManutencaoLocalsComponent } from './views/manutencao-locals/manutencao-locals.component';
import { VacinaCreateComponent } from './componentes/vacina/vacina-create/vacina-create.component';
import { VacinaDeleteComponent } from './componentes/vacina/vacina-delete/vacina-delete.component';
import { LocalCreateComponent } from './componentes/local/local-create/local-create.component';
import { LocalDeleteComponent } from './componentes/local/local-delete/local-delete.component';
import { ManutencaoVacinacaosComponent } from './views/manutencao-vacinacaos/manutencao-vacinacaos.component';

import { VacinacaoDeleteComponent } from './componentes/vacinacao/vacinacao-delete/vacinacao-delete.component';
import { VacinacaoCreateComponent } from './componentes/vacinacao/vacinacao-create/vacinacao-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "usuarios",
  component: ManutencaoUsuariosComponent

},
{
  path: "usuarios/create",
  component: UsuarioCreateComponent
},

{
  path: "usuarios/delete",
  component: UsuarioDeleteComponent
},

{
  path: "vacinas",
  component: ManutencaoVacinasComponent

},

{
  path: "vacinas/create",
  component: VacinaCreateComponent
},

{
  path: "vacinas/delete",
  component: VacinaDeleteComponent
},

{
  path: "locals",
  component: ManutencaoLocalsComponent

},

{
  path: "locals/create",
  component: LocalCreateComponent
},

{
  path: "locals/delete",
  component: LocalDeleteComponent
},

{
  path : "vacinacaos",
  component: ManutencaoVacinacaosComponent
  },

  {
    path: "vacinacaos/create",
    component: VacinacaoCreateComponent
  },

  {
    path: "vacinacaos/delete",
    component: VacinacaoDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
