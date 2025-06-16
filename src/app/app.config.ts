import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { notFoundInterceptor } from './interceptors/not-found.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuration de la détection des changements de zone
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Configuration des routes
    provideRouter(routes),
    // Configuration de l'intercepteur de requêtes HTTP
    provideHttpClient(withInterceptors([notFoundInterceptor])),
    // Configuration de la locale française
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
};
