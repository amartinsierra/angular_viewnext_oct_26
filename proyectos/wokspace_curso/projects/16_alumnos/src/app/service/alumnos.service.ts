import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  url:string="http://localhost:9000/alumnos"
  constructor(private http:HttpClient) { }

  altaAlumno(alumno:Alumno):Observable<void>{
    return this.http.post<void>(this.url,alumno);
  }
  buscarAlumno(email:string):Observable<Alumno>{
    return this.http.get<Alumno>(`${this.url}/${email}`);
  }
  alumnosCurso(curso:string):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.url}/por-curso`,{params:{curso:curso}});
  }
  eliminarAlumno(email:string):Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.url}/${email}`);
  }
  cursos():Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/cursos`);
  }
}
