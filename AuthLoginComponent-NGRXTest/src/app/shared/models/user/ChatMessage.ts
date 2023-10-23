
import { MessageType } from "./MessageType";

export interface ChatMessage {

    content: string;
    sender: string;
}

export interface ChatMessageWithType extends ChatMessage {

    type: MessageType;
}