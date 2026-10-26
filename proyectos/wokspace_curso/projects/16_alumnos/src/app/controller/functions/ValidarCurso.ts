import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validadorCurso(control: AbstractControl): ValidationErrors | null {
  const value:string = control.value;

  if (!value) {
    return null; // no actua si está vacío, eso se controla con Validators.required
  }


  //*************
  
  return {errorAvanzado:"No puede contener la palabra avanzado"}; //si no es válido, se devuelve un objeto
}
