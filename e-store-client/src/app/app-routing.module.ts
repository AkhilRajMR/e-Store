import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './models/roles.model';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) ,
    canActivate: [AuthGuardService]
  }, 
  { 
    path: 'login', 
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) 
  }, 
  { 
    path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService],
    data: { 
      roles: [Role.Admin]
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
