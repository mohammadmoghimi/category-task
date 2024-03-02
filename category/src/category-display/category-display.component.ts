import { CategoryService } from './category.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.scss'
})
export class CategoryDisplayComponent implements OnInit{

  categories:any[] = [] ;

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe({
        next: (data) => {
          this.categories = data ;
          console.log(this.categories);
        } ,

        error: (e) => console.error(e) ,

        complete: () => console.log('complete')
        
      }) ;
  } ;

}
