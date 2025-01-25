import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path:'', pathMatch: 'full', redirectTo: '/perfil'
    },
    {
        path: 'perfil', component: ProfileComponent,
    },
];
