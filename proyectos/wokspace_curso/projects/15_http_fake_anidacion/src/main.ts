import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Fake } from './app/controller/fake/fake';


bootstrapApplication(Fake, appConfig).catch((err) => console.error(err));
