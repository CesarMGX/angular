import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';  
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si es necesario
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    RouterModule,
    FormsModule, // Agregar FormsModule si es necesario
    ReactiveFormsModule // Asegúrate de incluir ReactiveFormsModule aquí
  ]
};





