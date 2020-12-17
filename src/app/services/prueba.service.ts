import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ItemsInterface } from '../models/itemsInterface';
import {map} from 'rxjs/operators';
import { ProductoImportacionInterface } from '../models/Compras/productos_importacionInterface';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  itemsCollection: AngularFirestoreCollection<ItemsInterface>;
  itemsDoc: AngularFirestoreDocument<ItemsInterface>;
  items: Observable<ItemsInterface[]>;
  item: Observable<ItemsInterface>;
  id: any;

  constructor(public afs: AngularFirestore,private router: Router) {
    // this.items = afs.collection('items').valueChanges();

    this.itemsCollection = afs.collection<ItemsInterface>('/compras/productoimportacion/productos');
    
   }

   getitems(){
    this.itemsCollection = this.afs.collection('/compras/productoimportacion/productos');
    this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ItemsInterface;
          const id = a.payload.doc.id;
          return { id, ... data };
        }))
    )
  
     return this.items;
     
   }
   getdatos(){
    
    this.itemsDoc = this.afs.doc<ItemsInterface>('/compras/productoimportacion/datosgenerales/datos');
    this.item = this.itemsDoc.valueChanges();
     return this.item;
     
   }

   additem(producto: ItemsInterface){
    this.itemsCollection.add(producto).then(a=>{
      this.id = a.id;
      console.log(a.id);
      console.log(this.id);
      this.router.navigate(['comprasProducto', a]);
    });

    return this.id;

  //   this.afs.collection("/compras/productoimportacion/productos").add(producto)
  // .then(function(docRef) {
      
  //     return docRef;
      
      
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);

  // });


  //  }
  }

}
