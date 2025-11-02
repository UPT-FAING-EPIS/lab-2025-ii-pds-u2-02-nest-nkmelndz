import { IMessageSender } from "./index";

export abstract class AbstractMessage {
  protected _messageSender: IMessageSender;
  public abstract SendMessage(Message: string): string;
}
