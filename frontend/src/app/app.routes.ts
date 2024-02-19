import { Routes } from '@angular/router';
import {CoursewebComponent} from './course-web.component'
import { LoginComponent } from './pages/admin/login/login.component';
import { AuthorsComponent } from './authors/authors.component';

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
    }
];
