import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BuscarController } from './app/controller/buscar-controller/buscar-controller';


bootstrapApplication(BuscarController, appConfig).catch((err) => console.error(err));
