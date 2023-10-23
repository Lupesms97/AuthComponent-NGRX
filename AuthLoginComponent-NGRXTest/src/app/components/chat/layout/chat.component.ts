
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ChatService } from 'src/app/core/chat/chat.service';


import { ChatMessage } from 'src/app/shared/models/user/ChatMessage';
import { MessageType } from 'src/app/shared/models/user/MessageType';
;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  username: string = "";
  messageText: string = "";
  receivedMessages: ChatMessage[] = [];

  constructor(private chatService: ChatService,
    private authService:AuthService) {
      
    }

  ngOnInit(): void {

    // Conecte-se ao servidor WebSocket ao inicializar o componente

    this.username = this.authService.getUserName();
    this.chatService.messages.subscribe((message: ChatMessage) => {
      console.log('Received a message from the server: ', message);
      this.receivedMessages.push(message);
    });
    
    this.chatService.addUser(this.username);
  }

  sendMessage() {
    const message: ChatMessage = {
      sender: this.username,
      content: this.messageText
    };
    this.receivedMessages.push(message);
    this.chatService.sendMessage(message);
    this.chatService.messages.next(message);
    console.log('Sent a message to the server: ', message);
  }

}
