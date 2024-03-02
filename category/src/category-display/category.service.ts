import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient) { }

  private url = 'http://localhost:4000/api/getAll' ;

  getAllCategories() :Observable <any>{
    return this.http.get<any>(this.url) ;
  }

}
