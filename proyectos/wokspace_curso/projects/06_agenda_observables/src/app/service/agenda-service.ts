import { Service } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Service()
export class AgendaService {
  private contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):Observable<boolean>{
    for(let c of this.contactos){
      if(c.telefono==contacto.telefono){
        return of(false);
      }
    }
    this.contactos.push(contacto);
    return of(true);
  }
  recuperarContactos():Observable<Contacto[]>{
    return of(this.contactos);
  }
  borrrarContactos():Observable<void>{
    this.contactos=[];
    return of();
  }
  buscarContacto(telefono:string):Observable<Contacto>{
    return of(this.contactos.find(c=>c.telefono==telefono));
  }

  buscarContactosEdadMax(edad:number):Observable<Contacto[]>{
    return of(this.contactos.filter(c=>c.edad<=edad));
  }
  //devuelve una lista con todos los teléfonos
  telefonos():Observable<string[]>{
    return of(this.contactos.map(c=>c.telefono));
  }

}
