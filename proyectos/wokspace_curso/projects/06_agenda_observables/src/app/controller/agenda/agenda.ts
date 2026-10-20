import { AgendaService } from './../../service/agenda-service';
import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  //inyecta el objeto AgendaService en el componente
  constructor(private agendaService:AgendaService){

  }
  //depositar los contactos entregados por el servicio
  contactos:Contacto[];
  //recogida campos del formulario
  contacto:Contacto=new Contacto();
 // show:boolean=false;
  agregarContacto():void{
    this.agendaService.agregarContacto(this.contacto)
    .subscribe(data=>{
      if(!data){
        alert("Telefono duplicado, no se añadió contacto!!");
      }else{
        this.contacto=new Contacto();
      }
    })

  }
  mostrarTodos():void{
    this.agendaService.recuperarContactos().subscribe(data=>this.contactos=data);

   // this.show=!this.show;
  }
}
