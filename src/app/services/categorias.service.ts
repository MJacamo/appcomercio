import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import  { environment }    from '../../../src/environments/environment';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http.error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  urlCategorias = `${environment.urlServer}/categorias`;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('CategoriasService');
  }

  getCategorias(): Observable<any> {
    return this.http.get<any>(this.urlCategorias)
      .pipe(
        catchError(this.handleError('getCategorias', []))
      )

  }
}
