import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { ImportacionComponent } from './departamento/compras/importacion/importacion.component';
import { PruebaService } from './services/prueba.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { HomeComponent } from './shared/home/home/home.component';
import { NuevoProductoComponent } from './departamento/compras/importacion/nuevo-producto/nuevo-producto.component';
import { DetalleProductoComponent } from './departamento/compras/importacion/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportacionComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NuevoProductoComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'webAppMSC'),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
