import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICategory } from '../interface/category.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule , MatButtonModule , MatListModule],
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
