export * from './domain.module';
export * from './domain.service';
export interface IMessageSender {
  SendMessage(Message: string): string;
}
