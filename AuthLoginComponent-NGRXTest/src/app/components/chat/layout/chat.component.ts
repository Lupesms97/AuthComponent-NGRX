
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

import { ChatMessage } from 'src/app/shared/models/user/ChatMessage';
import { MessageType } from 'src/app/shared/models/user/MessageType';
;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  username: string = '';
  messageText: string = '';
  receivedMessages: ChatMessage[] = [];
  sendMessages: ChatMessage[] = [];


  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.username = this.authservice.getUserName();
  }

  


  onSendMessage() {
    let message: ChatMessage = {
      sender: this.username,
      content: this.messageText,
      messageType: MessageType.CHAT
    };
    this.receivedMessages.push(message);
  }

  onKeyPress(event: KeyboardEvent): void {

  }

  logout() {
    // Implemente a lógica de logout, se necessário.
  }


}
