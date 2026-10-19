import { Component } from '@angular/core';
import { Operacion } from '../../model/Operacion';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  num1:number;
  num2:number;
  resultado:string;
  historico:Operacion[]=[];
  show:boolean=false;
  sumar():void{
    let sum=this.num1+this.num2;
    this.resultado=`La suma es ${sum}`;
    this.historico.push(new Operacion(`${this.num1}+${this.num2}`,sum));
  }
  multiplicar():void{
    let multi=this.num1*this.num2;
    this.resultado=`La suma es ${multi}`;
    this.historico.push(new Operacion(`${this.num1}x${this.num2}`,multi));
  }
  verHistorico():void{
    this.show=!this.show;
  }
}
