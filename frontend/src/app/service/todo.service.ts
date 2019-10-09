import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  headers: Headers = new Headers();
  options:any;

  constructor() {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('x-Requested-With','XMLHttpRequest');

    this.options = new RequestOptions({headers:this.headers});
   }
}
