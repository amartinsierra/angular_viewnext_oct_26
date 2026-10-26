import { Component, effect, OnInit, signal, viewChild } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PoblacionPipe } from '../../pipes/poblacion-pipe';

@Component({
  selector: 'app-paises',
  imports: [MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    FormsModule,CommonModule,
    MatButtonModule,
    MatInputModule,PoblacionPipe],
  templateUrl: './paises-component.html',
  styleUrl: './paises-component.css'
})
export class PaisesComponent implements OnInit{
  paises=signal<Pais[]>([]);
  //continente=signal<string>("-Continente-");
  continentes=signal<string[]>([]);
  displayedColumns: string[] = ['Pais', 'Continente', 'Poblacion','Bandera'];
  paginator=viewChild(MatPaginator);
  sort=viewChild(MatSort);
  dataSource:MatTableDataSource<Pais> = new MatTableDataSource<Pais>();

  constructor(private paisesService:PaisesService){
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'Pais':
          return item.name;
        case 'Continente':
          return item.region;
        case 'Poblacion':
          return item.population;
        default:
          return '';
      }
    };
    //asignar objetos al DataSource en el momento en que existan
    effect(() => {
      const paginator = this.paginator();
      const sort=this.sort();
      if (paginator) {
        this.dataSource.paginator = paginator;
      }
      if (sort) {
        this.dataSource.sort = sort;
      }
    });
  }
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data=>this.continentes.set(data));
  }
  cargarPaises(event:any):void{
      this.paisesService.getPaisesContinente(event.target.value).subscribe(data=>{
        this.paises.set(data);
        this.dataSource.data=this.paises();
     });
  }

}


