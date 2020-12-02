import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [
  {path:'', redirectTo:'view-all'},
  {path:'view-all', component:ViewAllComponent},
  {path:'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
