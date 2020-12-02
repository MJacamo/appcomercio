
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import  { environment }    from '../../../src/environments/environment';


import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import {ICatalogo} from '../modules/catalogo/interface/catalogo';
import { HttpErrorHandler, HandleError } from '../http.error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  urlCatalogo = `${environment.urlServer}/catalogos`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('CatalogosService');
  }

  getCatalogo(): Observable<any> {
    return this.http.get<any>(this.urlCatalogo)
      .pipe(
        catchError(this.handleError('getCatalogo', []))
      )

  }

  createCatalogo(form:any): Observable<any> {
    return this.http.post<any>(this.urlCatalogo, form)
      .pipe(
        catchError(this.handleError('createCatalogo',form))
      )
  }

  deleteCatalogo(id:string): Observable<any> {
    const urlDelete = `${this.urlCatalogo}/${id}`
    return this.http.delete<any>(urlDelete,this.httpOptions)
      .pipe(
        catchError(this.handleError('deleteCatalogo'))
      )
  }

  searchCatalogo(term: string): Observable<any[]> {
    term = term.trim();
    const options = term ?{ params: new HttpParams().set('value', term) } : {};

    return this.http.get<any[]>(this.urlCatalogo, options)
      .pipe(
        catchError(this.handleError<any[]>('searchCatalogo', []))
      );
  }
}
