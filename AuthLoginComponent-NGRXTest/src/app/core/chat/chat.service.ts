import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatMessage, ChatMessageWithType } from "src/app/shared/models/user/ChatMessage";
import { MessageType } from "src/app/shared/models/user/MessageType";

const CHAT_URL = "ws://localhost:8080/ws";

export interface Message {
  source: string;
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private subject: AnonymousSubject<MessageEvent>| undefined;
  public messages: Subject<ChatMessage>;

  constructor() {
    this.messages = <Subject<ChatMessage>>this.connect().pipe(
      map( (response: MessageEvent): ChatMessage => {
        console.log(response.data);
        let data = JSON.parse(response.data)
        return data;
      }
    ));
    
  }
  public sendMessage(message: ChatMessage) {
    const data = { destination: '/app/chat', payload: message };
    this.subject!.next(data as unknown as MessageEvent);
  }
  
  public addUser(username: string) {
    let message: ChatMessageWithType = {
      sender: username,
      content: '',
      type: MessageType.JOIN
    };
    const data = { destination: '/app/chat.addUser', payload: message };
    this.subject!.next(data as unknown as MessageEvent);

  
  }

  public connect(): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(CHAT_URL);
      console.log("Successfully connected: " + CHAT_URL);
    }
    return this.subject;
  }

  private create(url: string): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    let observer = {
      next: (data: Object) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
      error: (err: any) => {
        console.error('Error occurred: ', err);
      },
      complete: () => {
        console.log('Connection closed');
      }
    };

    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}