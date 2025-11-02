import { IMessageSender } from "./index";

export class SmsMessageSender implements IMessageSender {
  SendMessage(Message: string): string {
    return `'${Message}' : This Message has been sent using SMS`;
  }
}
