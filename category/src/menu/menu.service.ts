// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, map, of } from 'rxjs';
// import { ICategory } from '../interface/category.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuService {

//   constructor(private http : HttpClient) { }

//   private url = 'http://localhost:4000/api/getAll' ;

//   getBackendData():Observable<ICategory[]> {
//     return this.http.get<ICategory[]>(this.url) ;
//   }
  
  // getBackendData() {
  //   this.http.get<ICategory[]>(this.url).subscribe({
  //     next: (data: any) => {
  //       return this.transformData(data)
        
  //     }
  //   });
  // }

  // transformData(backendData: ICategory[]): Map<string, string[]> {
  //   const dataMap = new Map<string, string[]>();

  //   backendData.forEach((category) => {
  //     const nodeName = category.name;
  //     const children = category.children;

  //     dataMap.set(
  //       nodeName,
  //       children ? children.map((child) => child.name) : []
  //     );
  //   });

  //   return dataMap;
  // }

  // rootLevelNodes: string[] = ["first category", "third category" ,
  // "seventh category" , "ninth category"];


  // getChildren(node: string): Observable<string[]> {
  //   return this.getBackendData().pipe(
  //     map((backendData) => this.transformData(backendData).get(node) || [])
  //   );
  // }

  // isExpandable(node: string): Observable<boolean> {
  //   return this.getBackendData().pipe(
  //     map((backendData) => this.transformData(backendData).has(node))
  //   );
  // }

// }
