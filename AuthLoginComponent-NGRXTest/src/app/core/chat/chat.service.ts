import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket"
;
import { ChatMessage } from "src/app/shared/models/user/ChatMessage";

const CHAT_URL = "ws://localhost:8080/ws";

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages$: Observable<ChatMessage[]> = new Observable<ChatMessage[]>();
  subject$ = webSocket<ChatMessage[]>(CHAT_URL);

  constructor() {
    this.subject$.subscribe(
      (msg: ChatMessage[]) => this.messages$ = new Observable<ChatMessage[]>(observer => observer.next(msg)),
      err => console.log(err),
      () => console.log('complete')
    )
  }

  sendMessage(msg: ChatMessage) {
    let msgList: ChatMessage[] = [];
    msgList.push(msg);
    this.subject$.next(msgList);
  }

}