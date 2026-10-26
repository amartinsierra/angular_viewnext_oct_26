import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';

import { BuscadorService } from '../../service/buscador-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorUrl } from '../../validadores/ValidadorUrl';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../dialog/dialog';


@Component({
  selector: 'app-alta-controller',
  imports: [ReactiveFormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  registroForm:FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required,validadorUrl]),
    tematica: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  constructor(private buscadorService:BuscadorService,private dialog:MatDialog){
    //suscripción a cambios en el control url
    this.registroForm.get("url").valueChanges.subscribe(data=>
      this.registroForm.get("descripcion").setValue(data));
    //suscripcion a cambios en el control de tematica
    this.registroForm.get("tematica").valueChanges.subscribe(data=>{
      if(data=="libros"){
        this.registroForm.get("descripcion").addValidators(Validators.maxLength(20));
      }else{
        this.registroForm.get("descripcion").clearValidators();
        this.registroForm.get("descripcion").addValidators([Validators.required, Validators.minLength(10)]);
      }
      this.registroForm.get("descripcion").updateValueAndValidity();
    });

  }
  error:boolean=false;
  guardar(){

    if(this.registroForm.valid){

      this.buscadorService.nuevoItem({url:this.registroForm.value.url,
                                      tematica:this.registroForm.value.tematica,
                                      descripcion:this.registroForm.value.descripcion})
          .subscribe({
            next:data=>this.dialog.open(Dialog,{data:{titulo:"Aviso",mensaje:"Item añadido correctamente"}}),
            error:err=>this.dialog.open(Dialog,{data:{titulo:"Aviso",mensaje:"No se pudo añadir, URL repetida"}})
          });
      this.error=false;
    }else{
      this.error=true;

    }

  }
}
