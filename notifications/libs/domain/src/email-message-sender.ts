import { IMessageSender } from "./index";

export class EmailMessageSender implements IMessageSender {
  SendMessage(Message: string): string {
    return `'${Message}' : This Message has been sent using Email`;
  }
}
