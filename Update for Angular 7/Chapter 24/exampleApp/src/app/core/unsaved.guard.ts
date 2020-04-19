import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { FormComponent } from './form.component';
import { Observable, Subject } from 'rxjs';
import { Message } from '../messages/message.model';

@Injectable()
export class UnsavedGuard {
  constructor(private messages: MessageService,
              private router: Router) {
  }

  canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (component.editing) {
      if (['name', 'category', 'price']
        .some(prop => component.product[prop] !== component.originalProduct[prop])) {
        const subject = new Subject<boolean>();
        const responses: [string, (string) => void][] = [
          ['Yes', () => {
            subject.next(true);
            subject.complete();
          }],
          ['No', () => {
            this.router.navigateByUrl(this.router.url);
            subject.next(false);
            subject.complete();
          }]
        ];
        this.messages.reportMessage(new Message('Discard Changes?', true, responses));
        return subject;
      }
    }
    return true;
  }
}
