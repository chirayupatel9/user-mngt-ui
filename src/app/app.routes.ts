import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path: '', component: AdminComponent},
    {path: 'home', component: HomeComponent},
];

