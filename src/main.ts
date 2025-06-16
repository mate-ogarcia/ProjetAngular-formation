import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common'; // Importation de la fonction registerLocaleData
import localeFr from '@angular/common/locales/fr'; // Importation de la locale française
import { appConfig } from './app/app.config';

registerLocaleData(localeFr);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
