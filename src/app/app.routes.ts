import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule) ,
        
    },
    { path: 'admin', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule )}

];
