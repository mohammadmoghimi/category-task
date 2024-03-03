import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICategory } from '../interface/category.interface';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule , ],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {

  @Input() category:ICategory | undefined ;
  showChildren = false ;

  toggleChildren():void {
    this.showChildren = !this.showChildren ;
  }
}
