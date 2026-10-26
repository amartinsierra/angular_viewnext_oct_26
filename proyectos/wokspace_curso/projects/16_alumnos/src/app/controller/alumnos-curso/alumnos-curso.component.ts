import { Component, signal } from '@angular/core';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { Dialogo } from '../../ui/dialogo/dialogo';
import { CalificacionPipe } from "../../pipes/calificacion-pipe";


@Component({
  selector: 'app-alumnos-curso',
  imports: [CommonModule, FormsModule, RouterModule, CalificacionPipe],
  templateUrl: './alumnos-curso.component.html',
  styleUrl: './alumnos-curso.component.css'
})
export class AlumnosCursoComponent {
  cursos=signal<string[]>([]);
  alumnosPorCurso=signal<Alumno[]>([]);

  constructor(private alumnosService: AlumnosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.alumnosService.cursos().subscribe(data => this.cursos.set(data));

  }
  mostrarAlumnos(event: any): void {
    let curso = event.target.value
    this.alumnosService.alumnosCurso(curso).subscribe(data => this.alumnosPorCurso.set(data))
  }
  borrarAlumno(email: string): void{
      //********
  }
  favoritos(alumno:Alumno){
    let favoritos:Alumno[]=JSON.parse(sessionStorage.getItem("favoritos")?sessionStorage.getItem("favoritos"):"[]");
    if(favoritos.some(al=>al.email==alumno.email)){
      this.dialog.open(Dialogo,{
        data:{mensaje:"Alumno fuera de favoritos",titulo:"aviso"}
      });
      favoritos=favoritos.filter(al=>al.email!=alumno.email);
    }else{
      this.dialog.open(Dialogo,{
        data:{mensaje:"Alumno en favoritos",titulo:"aviso"}
      });
      favoritos.push(alumno);
    }
    sessionStorage.setItem("favoritos",JSON.stringify(favoritos));
  }


}
