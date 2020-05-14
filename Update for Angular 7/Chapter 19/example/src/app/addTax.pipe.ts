import { Pipe } from '@angular/core';

@Pipe({
    name: 'addTax'
})
export class PaAddTaxPipe {

    defaultRate = 10;

    transform(value: any, rate?: any): number {
        const valueNumber = Number.parseFloat(value);
        const rateNumber = rate == undefined ?
            this.defaultRate : Number.parseInt(rate);
        return valueNumber + (valueNumber * (rateNumber / 100));
    }
}
