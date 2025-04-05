import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }