import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/Post';
import { Comentario } from '../model/Comentario';

@Service()
export class FakeService {
  private http:HttpClient=inject(HttpClient);
  urlBase:string="https://jsonplaceholder.typicode.com/"
  totalPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlBase+"posts");
  }

  comentariosPost(postId:number):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.urlBase+"comments",{"params":{"postId":postId}});
  }

  comentariosUsuario(email:string):Observable<Comentario[]>{
    let comentariosTotales:Observable<Comentario[]>=this.http.get<Comentario[]>(this.urlBase+"comments");
    return comentariosTotales.pipe(map(lista=>lista.filter(c=>c.email==email)));
  }
}
