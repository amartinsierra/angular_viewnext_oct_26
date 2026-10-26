import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Post } from '../../model/Post';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-combo-child',
  styleUrl: './combo-child.css',
  templateUrl: './combo-child.html',
})
export class ComboChild {
  @Input() posts=signal<Post[]>([]);
  @Output() seleccion:EventEmitter<number>=new EventEmitter<number>();
  postSelected=signal<number>(0);
  cargarComentarios(){
    this.seleccion.emit(this.postSelected());
  }
}
