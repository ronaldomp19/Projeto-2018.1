import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';


const routes: Routes = [
  {path:"addUsuario", component:AddUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
