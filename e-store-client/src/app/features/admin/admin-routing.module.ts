import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AkshayasreeComponent } from './registration/akshayasree/akshayasree.component';
import { MemberComponent } from './registration/member/member.component';

const routes: Routes = [
  { path: '', 
  component: AdminComponent 
  },
  { 
    path: 'member', 
    component: MemberComponent 
  },
  { 
    path: 'akshayasree', 
    component: AkshayasreeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
