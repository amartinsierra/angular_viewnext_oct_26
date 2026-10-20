import { Service } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Service()
export class AgendaService {
  private contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):boolean{
    for(let c of this.contactos){
      if(c.telefono==contacto.telefono){
        return false;
      }
    }
    this.contactos.push(contacto);
    return true;
  }
  recuperarContactos():Contacto[]{
    return this.contactos;
  }
  borrrarContactos():void{
    this.contactos=[];
  }
  buscarContacto(telefono:string):Contacto{
    return this.contactos.find(c=>c.telefono==telefono);
  }

  buscarContactosEdadMax(edad:number):Contacto[]{
    return this.contactos.filter(c=>c.edad<=edad);
  }
  //devuelve una lista con todos los teléfonos
  telefonos():string[]{
    return this.contactos.map(c=>c.telefono);
  }

}
