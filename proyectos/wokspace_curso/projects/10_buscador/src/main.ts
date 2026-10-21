import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BuscarController } from './app/controller/buscar-controller/buscar-controller';
import { AltaController } from './app/controller/alta-controller/alta-controller';


bootstrapApplication(AltaController, appConfig).catch((err) => console.error(err));
