import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  get messages(): Observable<Message> {
    return this.subject;
  }

  reportMessage(msg: Message) {
    this.subject.next(msg);
  }
}
