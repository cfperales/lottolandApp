import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
/**
 * This pipe is just used to format the prize value and set the decimals because it comes without decimals. Angular currency pipe does
 * not handle that, and we cannot assume that all currencies are going to have the same number of decimals.
 * Only EUR is handled
 * This pipe is going to be combine with the currency pipe in the template, to avoid developing here the functionality of
 * Angular currency pipe.
 */
export class FormatPrizePipe implements PipeTransform {
  transform(value: number, currency: string): number {
    return currency === 'EUR' ? value / Math.pow(10, 2) : value;
  }
}
