import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductoImportacionInterface } from '../../models/Compras/productos_importacionInterface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceImportacionService {
  
  productosCollection: AngularFirestoreCollection<ProductoImportacionInterface>;
  productoDoc: AngularFirestoreDocument<ProductoImportacionInterface>;
  productos: Observable<ProductoImportacionInterface[]>;
  producto: Observable<ProductoImportacionInterface>;
  
  constructor(public db: AngularFirestore,
              private router: Router) {

               }


obtenerProductos(){
  this.productosCollection = this.db.collection('/compras/productoimportacion/productos');
  this.productos = this.productosCollection.snapshotChanges().pipe(
    map(actions => actions.map(a=>{
      const data = a.payload.doc.data() as ProductoImportacionInterface;
      const id = a.payload.doc.id;
      return { id, ... data};
    }))
  )
  return this.productos;
}

obtenerDatosEmpresa(){
  this.productoDoc = this.db.doc<any>('/compras/productoimportacion/datosgenerales/datos');
  this.producto = this.productoDoc.valueChanges();

  return this.producto;
}

obtenerProducto(id: any){
  this.productoDoc = this.db.doc<any>(`/compras/productoimportacion/productos/${id}`);
  this.producto = this.productoDoc.valueChanges();

  return this.producto;
}
              
}


