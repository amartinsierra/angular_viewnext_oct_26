import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';

import { BuscadorService } from '../../service/buscador-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alta-controller',
  imports: [FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  item=signal<Item>({"url":"","tematica":"","descripcion":""});
  //item:Item={"url":"","tematica":"","descripcion":""}; //en caso de no haber utilizado signal
  constructor(private buscadorService:BuscadorService){}
  error:boolean=false;
  guardar(form:any){

    if(form.valid){
      this.buscadorService.nuevoItem(this.item())
          .subscribe({
            next:data=>alert("Nuevo elemento almacenado"),
            error:err=> alert("No se pudo añadir, URL repetida")
          });
      this.error=false;
    }else{
      this.error=true;
      alert("El formulario no es válido")
    }

  }
}
