import { ICatalogo} from './../interface/catalogo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CatalogosService} from '../../../services/catalogos.service';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

   catalogos:any[] = [];

  constructor(
      private catalogoService: CatalogosService,
      private router : Router
  ) {


  }

  ngOnInit(): void {
    this.getCatalogo();
  }

  getCatalogo() : void {
    this.catalogoService.getCatalogo().subscribe(data => this.catalogos = data.catalogos);
  }

  deleteCatalogo(id:string): void {
    this.catalogoService.deleteCatalogo(id).subscribe();
    this.getCatalogo();
  }

  searchCatalogo(value: string) {
    if (value) {
     this.catalogoService
        .searchCatalogo(value)
        .subscribe(catalogo => (this.catalogos = catalogo));
    }
  }

}
