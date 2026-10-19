import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombre:string;
  edad:number;
  mensaje:string;
  mostrar():void{
    if(this.edad>18){
      this.mensaje=this.nombre+ " eres mayor de edad";
    }else{
      this.mensaje=this.nombre+" eres menor de edad";
    }
  }
}
