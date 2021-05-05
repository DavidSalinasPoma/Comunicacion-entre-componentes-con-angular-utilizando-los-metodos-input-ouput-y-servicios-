import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importando modulos personalizados
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Routing del componente principal
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importando modulos
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
