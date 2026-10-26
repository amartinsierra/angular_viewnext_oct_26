import { Component, OnInit, signal } from '@angular/core';
import { FakeService } from '../../service/fake-service';
import { Post } from '../../model/Post';
import { Comentario } from '../../model/Comentario';
import { FormsModule } from '@angular/forms';
import { TableChild } from '../../component/table-child/table-child';
import { ComboChild } from '../../component/combo-child/combo-child';

@Component({
  imports: [FormsModule,TableChild,ComboChild],
  selector: 'app-fake',
  styleUrl: './fake.css',
  templateUrl: './fake.html',
})
export class Fake implements OnInit{
  constructor(private fService:FakeService){

  }
  ngOnInit(): void {
    this.fService.totalPosts().subscribe({
      next:r=>this.posts.set(r),
      error:er=>alert(er)
    });
  }
  posts=signal<Post[]>([]);
  comentarios=signal<Comentario[]>([]);


  cargarComentarios(postSelected:number):void{
    this.fService.comentariosPost(postSelected).subscribe({
      next:r=>this.comentarios.set(r),
      error:er=>alert(er)
    });
  }

}
