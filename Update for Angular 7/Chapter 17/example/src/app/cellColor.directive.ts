import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'td'
})
export class PaCellColor {

    @HostBinding('class')
    bgClass = '';

    setColor(dark: Boolean) {
        this.bgClass = dark ? 'bg-dark' : '';
    }
}
