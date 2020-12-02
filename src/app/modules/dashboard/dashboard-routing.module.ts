import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'catalogo', pathMatch:'full'},
  {path:'catalogo', loadChildren: ()=> import('../catalogo/catalogo.module').then(m => m.CatalogoModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
