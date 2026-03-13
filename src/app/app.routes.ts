import { Routes } from '@angular/router';
// Importamos los componentes aquí
//import { App } from './app';
import { Tablaestudiante} from './estudiante/tabla-estudiante';
 // Asegúrate de que esta ruta sea correcta según tu estructura de carpetas
export const routes: Routes = [
// Ruta para la tabla
  { path: 'lista', component: Tablaestudiante },
  
  // Ruta raíz: NO le pongas component ni redirectTo. 
  // Al dejarla así, el <router-outlet> simplemente no cargará nada al inicio.
  { path: '', children: [] } // Deja el path vacío y sin redirección para que no cargue nada al inicio
];