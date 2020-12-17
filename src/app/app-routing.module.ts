import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportacionComponent } from './departamento/compras/importacion/importacion.component';
import { HomeComponent } from './shared/home/home/home.component';
import { NuevoProductoComponent } from './departamento/compras/importacion/nuevo-producto/nuevo-producto.component';
import { DetalleProductoComponent } from './departamento/compras/importacion/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comprasImportacion', component: ImportacionComponent},
  {path: 'comprasNuevoProducto', component: NuevoProductoComponent},
  {path: 'comprasProducto', component: DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
