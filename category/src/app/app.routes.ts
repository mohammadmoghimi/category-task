import { Routes } from '@angular/router';
import { CategoryDisplayComponent } from '../category-display/category-display.component';

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
