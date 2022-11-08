import { NgModule, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';


@NgModule({
    declarations: [
        CarteleraComponent,
        PeliculaComponent,
        DetallePeliculaComponent
    ],
    exports: [
        CarteleraComponent,
        PeliculaComponent,
        DetallePeliculaComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
})
export class ComponentsModule {}