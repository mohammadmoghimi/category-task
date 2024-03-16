import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http:HttpClient) { }

  private url = 'http://localhost:4000/api/getAll' ;

  getAllCategories() :Observable <ICategory[]>{
    return this.http.get<ICategory[]>(this.url) ;
  }

}