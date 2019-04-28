import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { PessoaService } from './pessoa.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { DetalheFormComponent } from './detalhe-form/detalhe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListagemComponent,
    PessoasFormComponent,
    DetalheFormComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
