import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorCurso } from '../functions/ValidarCurso';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../../dialog/dialog';


@Component({
  selector: 'app-alta',

  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent implements OnInit{

  error:boolean=false;
  registroForm = new FormGroup({
    idAlumno: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nota: new FormControl('', [Validators.required, Validators.min(1),Validators.max(10)]),
    curso: new FormControl('', [Validators.required,validadorCurso])
  });



  constructor(private route:ActivatedRoute,
    private alumnosService:AlumnosService,
    private matDialog:MatDialog){

  }
  ngOnInit(): void {
    this.registroForm.get("email").valueChanges.subscribe(data=>{
      const curso=this.registroForm.get("curso");
      if(data.endsWith("empresa.es")){
        curso.clearValidators();
      }else{
        curso.setValidators([Validators.required,validadorCurso]);
      }
      curso.updateValueAndValidity();
    });
  }
  alta(){

    if(this.registroForm.valid){
        const value=this.registroForm.value;
        const alumno:Alumno={idAlumno:value.idAlumno,nombre:value.nombre,curso:value.curso,email:value.email,nota:parseFloat(value.nota)};
        this.alumnosService.altaAlumno(alumno).subscribe(
        {
          next: (data)=>this.matDialog.open(Dialog,{data:{mensaje:"Alumno agregado"}}),
          error: error=>this.matDialog.open(Dialog,{data:{mensaje:`${value.email} ya existe. No se añadió`}}),

        }
      );
    }else{
      this.error=true;
    }


  }

}
