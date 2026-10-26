import { Component, Input, signal } from '@angular/core';
import { Comentario } from '../../model/Comentario';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-table-child',
  styleUrl: './table-child.css',
  templateUrl: './table-child.html',
})
export class TableChild {
  @Input() comentarios=signal<Comentario[]>([]);
}
