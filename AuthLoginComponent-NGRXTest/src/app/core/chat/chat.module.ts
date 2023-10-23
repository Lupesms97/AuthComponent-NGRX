import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxStompService } from './rx-stomp.service';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { ChatService } from './chat.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
