

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calcprice'})
export class CalcPricePipe implements PipeTransform {
    transform(value: number, quantity: number): number {
        return value * quantity;
    }
}

