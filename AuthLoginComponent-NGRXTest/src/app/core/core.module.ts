import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { Store, StoreFeatureModule } from '@ngrx/store';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AuthModule,
    ChatModule,
  ],
  

  
})
export class CoreModule { }
