import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  public transform(obj: any): string[] {
    return Object.keys(obj);
  }
}
