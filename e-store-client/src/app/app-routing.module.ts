import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { HomeComponent } from './features/home/home.component';
import { StoresComponent } from './features/stores/stores.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role.model';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  }, 
  { 
    path: 'stores', 
    component: StoresComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { 
      roles: [Role.Admin]
    }
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: 'current',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
