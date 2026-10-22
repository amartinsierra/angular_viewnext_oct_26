import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MenuController } from './app/controller/menu-controller/menu-controller';


bootstrapApplication(MenuController, appConfig).catch((err) => console.error(err));
