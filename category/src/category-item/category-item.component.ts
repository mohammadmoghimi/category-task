import { ICategory } from './../interface/category.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule , MatButtonModule , MatListModule , MatMenuModule  ],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {

  @Input() category:ICategory | undefined ;
   showChildren = false ;

  toggleChildren() {
  this.showChildren = !this.showChildren ;      
  }
}
