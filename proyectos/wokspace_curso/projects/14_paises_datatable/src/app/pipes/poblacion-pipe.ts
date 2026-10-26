import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poblacion',
})
export class PoblacionPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString();
  }
}
