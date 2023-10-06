import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userState } from '../core/store/loadUser.reducer';
import { ChatComponent } from './chat/layout/chat.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    CoreModule,
    StoreModule.forFeature('user', userState)
  ],
  declarations: [
    ChatComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
})
export class ComponentsModule { }
