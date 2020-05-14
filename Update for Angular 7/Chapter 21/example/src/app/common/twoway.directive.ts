import { Input, Output, EventEmitter, Directive,
    HostBinding, HostListener, SimpleChange } from '@angular/core';

@Directive({
    selector: 'input[paModel]',
    exportAs: 'paModel'
})
export class PaModel {

    direction = 'None';

    @Input('paModel')
    modelProperty: string;

    @HostBinding('value')
    fieldValue = '';

    @Output('paModelChange')
    update = new EventEmitter<string>();

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        const change = changes['modelProperty'];
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes['modelProperty'].currentValue || '';
            this.direction = 'Model';
        }
    }

    @HostListener('input', ['$event.target.value'])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = 'Element';
    }
}
