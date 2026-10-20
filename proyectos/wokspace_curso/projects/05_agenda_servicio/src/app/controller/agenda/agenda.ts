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
  show:boolean=false;
  agregarContacto():void{
    if(!this.agendaService.agregarContacto(this.contacto)){
      alert("Telefono duplicado, no se añadió contacto!!");
      return;
    }

    this.contacto=new Contacto();
  }
  mostrarTodos():void{
    this.contactos=this.agendaService.recuperarContactos();

    this.show=!this.show;
  }
}
