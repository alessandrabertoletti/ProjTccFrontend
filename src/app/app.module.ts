import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { MenuComponent } from './componentes/template/menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import {MatCardModule} from '@angular/material/card';
import { ManutencaoUsuariosComponent } from './views/manutencao-usuarios/manutencao-usuarios.component';
import { UsuarioCreateComponent } from './componentes/usuario/usuario-create/usuario-create.component';
import {MatButtonModule} from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioReadComponent } from './componentes/usuario/usuario-read/usuario-read.component';
import {MatTableModule} from '@angular/material/table';
import { UsuarioDeleteComponent } from './componentes/usuario/usuario-delete/usuario-delete.component';
import { ManutencaoVacinasComponent } from './views/manutencao-vacinas/manutencao-vacinas.component';
import { VacinaCreateComponent } from './componentes/vacina/vacina-create/vacina-create.component';
import { VacinaReadComponent } from './componentes/vacina/vacina-read/vacina-read.component';
import { VacinaDeleteComponent } from './componentes/vacina/vacina-delete/vacina-delete.component';
import { ManutencaoLocalsComponent } from './views/manutencao-locals/manutencao-locals.component';
import { LocalCreateComponent } from './componentes/local/local-create/local-create.component';
import { LocalReadComponent } from './componentes/local/local-read/local-read.component';
import { LocalDeleteComponent } from './componentes/local/local-delete/local-delete.component';
import { ManutencaoVacinacaosComponent } from './views/manutencao-vacinacaos/manutencao-vacinacaos.component';
import { VacinacaoCreateComponent } from './componentes/vacinacao/vacinacao-create/vacinacao-create.component';
import { VacinacaoReadComponent } from './componentes/vacinacao/vacinacao-read/vacinacao-read.component';
import { VacinacaoDeleteComponent } from './componentes/vacinacao/vacinacao-delete/vacinacao-delete.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ManutencaoUsuariosComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    UsuarioDeleteComponent,
    ManutencaoVacinasComponent,
    VacinaCreateComponent,
    VacinaReadComponent,
    VacinaDeleteComponent,
    ManutencaoLocalsComponent,
    LocalCreateComponent,
    LocalReadComponent,
    LocalDeleteComponent,
    ManutencaoVacinacaosComponent,
    VacinacaoCreateComponent,
    VacinacaoReadComponent,
    VacinacaoDeleteComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
