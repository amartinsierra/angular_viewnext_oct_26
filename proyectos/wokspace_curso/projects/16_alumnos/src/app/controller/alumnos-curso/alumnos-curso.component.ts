import { Component, signal } from '@angular/core';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { CalificacionPipe } from "../../pipes/calificacion-pipe";
import { Dialog } from '../../dialog/dialog';


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
      this.alumnosService.eliminarAlumno(email)
      .subscribe(data=>{
        this.dialog.open(Dialog,{
                data:{mensaje:`Alumno ${data.nombre} eliminado`,titulo:"aviso"}
              });
      });
  }
  favoritos(alumno:Alumno){
    let favoritos:Alumno[]=JSON.parse(sessionStorage.getItem("favoritos")?sessionStorage.getItem("favoritos"):"[]");
    if(favoritos.some(al=>al.email==alumno.email)){
      this.dialog.open(Dialog,{
        data:{mensaje:"Alumno fuera de favoritos",titulo:"aviso"}
      });
      favoritos=favoritos.filter(al=>al.email!=alumno.email);
    }else{
      this.dialog.open(Dialog,{
        data:{mensaje:"Alumno en favoritos",titulo:"aviso"}
      });
      favoritos.push(alumno);
    }
    sessionStorage.setItem("favoritos",JSON.stringify(favoritos));
  }


}
