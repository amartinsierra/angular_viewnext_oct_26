import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorCurso } from '../functions/ValidarCurso';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Dialogo } from '../../ui/dialogo/dialogo';

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
    //******************
	//si el email es de empresa (termina en empresa.es) curso no tendrá ningún tipo de validación
  }
  alta(){

    //***********************


  }

}
