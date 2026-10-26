import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule],
  selector: 'app-dialog',
  styleUrl: './dialog.css',
  templateUrl: './dialog.html',
})
export class Dialog {
  constructor(private dialogRef:MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo:string, mensaje: string }
  ){}
  cerrar(){
    this.dialogRef.close();
  }
}
