import { Routes } from '@angular/router';
import {CoursewebComponent} from './course-web.component'
import { LoginComponent } from './pages/admin/login/login.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { DIRECTIVEComponent } from './directive/directive.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo: 'login',
        pathMatch : 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'courses',
        component: CoursewebComponent
    },
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'favorite',
        component: FavoriteComponent
    },
    {
        path: 'TitleCase',
        component: TitleCaseComponent       
    },
    {
        path: 'dir',
        component: DIRECTIVEComponent       
    }
    
];
