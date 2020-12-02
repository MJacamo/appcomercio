
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoRoutingModule } from './catalogo-routing.module';


import { ViewAllComponent } from './view-all/view-all.component';
import { CreateComponent } from './create/create.component';

import { CatalogosService } from "../../services/catalogos.service";
import { HttpErrorHandler } from "../../http.error-handler.service";
import { MessageService } from "../../message.service";
import {CategoriasService} from '../../services/categorias.service';


@NgModule({
  declarations: [ViewAllComponent, CreateComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers:[CatalogosService, HttpErrorHandler, MessageService, CategoriasService],
})
export class CatalogoModule { }
