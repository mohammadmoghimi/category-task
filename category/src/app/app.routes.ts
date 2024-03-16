import { Routes } from '@angular/router';
import { CategoryDisplayComponent } from '../category-display/category-display.component';
import { MenuComponent } from '../menu/menu.component';

export const routes: Routes = [
    {
        path:'' ,
        pathMatch:'full',
        redirectTo:"categories"
    } ,
    {
        path:"categories" ,
        component:CategoryDisplayComponent
    }
];
