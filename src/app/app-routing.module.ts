import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes que maneja esta ruta
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Cualquier otra ruta va arediccionar a un componente
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
