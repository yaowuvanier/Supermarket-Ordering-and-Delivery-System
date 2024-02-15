import { Routes } from '@angular/router';
import {CoursewebComponent} from './course-web.component'
import { LoginComponent } from './pages/admin/login/login.component';

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
    }
];
