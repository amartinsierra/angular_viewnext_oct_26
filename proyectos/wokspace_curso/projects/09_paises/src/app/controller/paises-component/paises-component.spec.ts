import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesComponent } from './paises-component';
import { of } from 'rxjs';
import { PaisesService } from '../../service/paises.service';

describe('PaisesComponent', () => {
  let component: PaisesComponent;
  let fixture: ComponentFixture<PaisesComponent>;
  let paisesServiceMock: any
  beforeEach(async () => {
      paisesServiceMock = {
      getContinentes: () => of(['Europe', 'Asia']),
      getPaisesContinente: (continente: string) => of([
        { name: 'España', region: continente, population: 1, flags: {} }
      ])
    };
    await TestBed.configureTestingModule({
      imports: [PaisesComponent],
      providers: [
        { provide: PaisesService, useValue: paisesServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });



/*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaisesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test para ver si carga continentes en onInit
  it('debería cargar continentes al iniciar', () => {

    fixture.detectChanges(); // ejecuta ngOnInit

    expect(component.continentes().length).toBe(2);
    expect(component.continentes().some(n=>'Europe')).toBeTruthy();
    expect(component.continentes().some(n=>'Asia')).toBeTruthy();
  });

  it('debería cargar países al seleccionar continente', () => {

    const event = { target: { value: 'Europe' } };

    component.cargarPaises(event);

    expect(component.paises().length).toBe(1);
    expect(component.paises()[0].region).toBe('Europe');
  });
//test para el funcionamiento del combo
  it('debería pintar los continentes en el select', () => {

    fixture.detectChanges(); //  ejecuta ngOnInit + render

    const html = fixture.nativeElement;

    const options = html.querySelectorAll('option');

    expect(options.length).toBe(3);
    expect(options[1].textContent).toContain('Europe');
    expect(options[2].textContent).toContain('Asia');
  });
});
