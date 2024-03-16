import { CommonModule } from '@angular/common';
import { ICategory } from '../interface/category.interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../category-display/category.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent{
    categories!: ICategory[] ;
    childCategories:ICategory[] = [] ;

    constructor(private categoryService: CategoryService) { }
  
    ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe({
        next : (data) => {
          this.categories = data ;
        } , 
        error :(e) => console.error(e)
      })
    }
 
    toggleSubMenu(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      target.classList.toggle('open');
    }
}
//   @Input() categories: any[] = [];

//   toggleMenu(category: any) {
//     category.showChild = !category.showChild;
//   }

//   // categories : ICategory[] = [] ;
//   // @Output() dataMap = new Map<string, string[]>();

//   // constructor(private menuService : MenuService) {}

//   // ngOnInit(): void {
//   //     this.menuService.getBackendData().subscribe({
//   //       next : (data) =>{
//   //         //  this.categories = data ;
//   //          this.dataMap = this.buildDataMap(data);
//   //          this.dataMap.forEach((value, key) => {
//   //           console.log(`${key}: ${value}`);
//   //         });
//   //         } ,

//   //       error: (e) => console.error(e) ,

//   //       complete: () => console.log('complete') 
//   //     }) ;
//   // }

//   // buildDataMap(jsonData: ICategory[]): Map<string, string[]> {
//   //   const fakeDataMap = new Map<string, string[]>();
  
//   //   function processCategory(category: ICategory): string[] {
//   //     if (!category.children || category.children.length === 0) {
//   //       return [];
//   //     }
  
//   //     return category.children.map(child => {
//   //       const nestedChildren = processCategory(child);
//   //       if (nestedChildren.length === 0) {
//   //         return child.name;
//   //       } else {
//   //         fakeDataMap.set(child.name, nestedChildren);
//   //         return child.name;
//   //       }
//   //     });
//   //   }
//   //     jsonData.forEach(category => {
//   //     const children = processCategory(category);
//   //     if (children.length === 0) {
//   //       fakeDataMap.set(category.name, []);
//   //     } else {
//   //       fakeDataMap.set(category.name, children);
//   //     }
//   //   });
  
//   //   return fakeDataMap;
//   // }

//   // rootlevelNodes :string[] = ["first category" , "third category" ,
//   //  "seventh category" ,"ninth category"] ;

//   //  getChildren(node: string) {
//   //   return (this.dataMap.get(node));
//   // }

//   // isExpandable(node: string): boolean {
//   //   return this.dataMap.has(node);
//   // }



