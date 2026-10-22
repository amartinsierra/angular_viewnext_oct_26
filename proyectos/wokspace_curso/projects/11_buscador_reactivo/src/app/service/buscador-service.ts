import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../model/Item';

@Service()
export class BuscadorService {
  private http:HttpClient=inject(HttpClient);
  urlBase="https://microservicios-buscador.onrender.com/buscador/";
  //urlBase="http://localhost:8000/buscador/";

  itemsPorTematica(tematica:string):Observable<Item[]>{
    return this.http.get<Item[]>(this.urlBase + "items",{"params":{"tematica":tematica}});
  }
  eliminarItem(url:string):Observable<void>{
    return this.http.delete<void>(this.urlBase + 'items', { params: { url } });
  }
  nuevoItem(item:Item):Observable<void>{
    return this.http.post<void>(this.urlBase + "items",item);
  }
}
