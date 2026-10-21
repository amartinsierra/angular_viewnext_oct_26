import { Component, OnInit, signal } from '@angular/core';
import { FakeService } from '../../service/fake-service';
import { Post } from '../../model/Post';
import { Comentario } from '../../model/Comentario';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
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
  postSelected=signal<number>(0);

  cargarComentarios():void{
    this.fService.comentariosPost(this.postSelected()).subscribe({
      next:r=>this.comentarios.set(r),
      error:er=>alert(er)
    });
  }

}
