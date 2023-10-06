import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './dashboard/user/user.component';
import { authGuard } from '../core/auth/guard/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { hasRole } from '../core/auth/guard/has-role.guard';
import { Role } from '../shared/models/user/Role';
import { ChatComponent } from './chat/layout/chat.component';

const AuthRoutes:Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'user', component : UserComponent, canActivate: [authGuard, hasRole], data: {role: Role.USER}},
  {path: 'admin', component : AdminComponent, canActivate: [authGuard, hasRole], data: {role: Role.ADMIN}},
  
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
