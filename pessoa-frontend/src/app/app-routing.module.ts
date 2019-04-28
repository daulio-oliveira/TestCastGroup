import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { DetalheFormComponent } from './detalhe-form/detalhe-form.component';

const appRoutes: Routes = [
  { path: '', component: PessoasListagemComponent},
  { path: 'novo', component: PessoasFormComponent},
  { path: 'editar/:id', component: DetalheFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
