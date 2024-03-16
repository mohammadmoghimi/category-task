import { CategoryService } from './category.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../interface/category.interface';
import { CategoryItemComponent } from '../category-item/category-item.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-category-display',
  standalone: true,
  imports: [CommonModule , CategoryItemComponent,
     MatButtonModule , MatListModule , MatMenuModule],
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.scss'
})
export class CategoryDisplayComponent implements OnInit{  

   categories:ICategory[] = [] ;

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe({
        next: (data) => {
          this.categories = data.filter((category) => category.parent_id === null )
          console.log(this.categories);
        } ,

        error: (e) => console.error(e) ,

        complete: () => console.log('complete')
        
      }) ;
  } ;

    onClick(category : ICategory):void{
    category.children = category.children || []
     
  }

}