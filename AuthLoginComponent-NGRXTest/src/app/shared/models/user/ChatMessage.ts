
import { MessageType } from "./MessageType";

export interface ChatMessage {

    content: string;
    sender: string;
    messageType: MessageType;


}