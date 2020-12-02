import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import {CategoriasService} from '../../../services/categorias.service';
import { CatalogosService } from "../../../services/catalogos.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  categorias:any[] = [];

  createCatalogo = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      existence: new FormControl(''),
      measure: new FormControl(''),
      category: new FormControl(''),
  })

  constructor(
    private categoriaServices:CategoriasService,
    private catalogosService:CatalogosService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaServices.getCategorias().subscribe(categiria => this.categorias = categiria.data);
  }

  create(): void {
    this.catalogosService.createCatalogo(this.createCatalogo.value).subscribe(data => console.log(data));
    this.router.navigate(['/dashboard/catalogo'])
  }

}
