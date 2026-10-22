import { Component, computed, Signal, signal } from '@angular/core';
import { email, form, minLength, pattern, required, validate } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  error:boolean;
  model = signal({
      usuario: '',password:'',email: '',telefono:'',profesional: false, instagram: ''
    });
  formClients=form(this.model,p=>{
    required(p.usuario);
    required(p.password);
    minLength(p.password,5);
    required(p.email);
    email(p.email);
    required(p.telefono);
    pattern(p.telefono,RegExp("[0-9]{9}"));
    required(p.instagram, {
      when: ({ valueOf }) => valueOf(p.profesional)
    });
    validate(p.instagram, ({ value, valueOf }) => {
      if (!valueOf(p.profesional)) {
        return undefined;
      }

      let instagram = value()?.trim();
      if (!instagram) {
        return undefined;
      }

      if (instagram.includes('@')) {
        return undefined;
      }

      return {
        kind: 'invalido',
        message: 'Debe incluir una @'
      };
    });
  });

  formInvalid = computed(() => {
    return (
      this.formClients.usuario().invalid() ||
      this.formClients.email().invalid() ||
      this.formClients.password().invalid() ||
      this.formClients.telefono().invalid() ||
      this.formClients.instagram().invalid()
    );


  });
  procesar(){
    this.error=this.formInvalid();
    if(this.error){
      alert("formulario no valido");
    }else{
      alert("formulario valido");
    }
  }
}
