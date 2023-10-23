import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { Store, StoreFeatureModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AuthModule,
    ChatModule,
    HttpClientModule
  ]
})
export class CoreModule { }
