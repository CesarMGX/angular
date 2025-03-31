import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserCatalogComponent } from './pages/user-catalog/user-catalog.component';
import { CatalogoProductosComponent } from './pages/catalogo-productos/catalogo-productos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';  // Asegúrate de importar el componente

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', component: UserCatalogComponent },
  { path: 'catalogo-productos', component: CatalogoProductosComponent },
  { path: 'mi-cuenta', component: PerfilComponent } // Ruta para "Mi Perfil"
];



