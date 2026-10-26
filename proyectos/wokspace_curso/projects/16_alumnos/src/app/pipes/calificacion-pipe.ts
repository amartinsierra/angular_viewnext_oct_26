import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion',
})
export class CalificacionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if(value<5){
      return "suspenso";
    }
    if(value>=5&&value<7){
      return "aprobado";
    }
    if(value>=7&&value<9){
      return "notable";
    }
    if(value>=9&&value<=10){
      return "sobresaliente";
    }
    return "no válido";
  }
}
