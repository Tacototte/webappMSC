import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PruebaService } from '../../../services/prueba.service';
import { ItemsInterface } from '../../../models/itemsInterface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ServiceImportacionService } from 'src/app/services/compras/service-importacion.service';
import { Producto } from '../../../models/Compras/producto';

@Component({
  selector: 'app-importacion',
  templateUrl: './importacion.component.html',
  styleUrls: ['./importacion.component.css']
})
export class ImportacionComponent implements OnInit {

  

  items: any[];

  constructor( private router: Router ,
               private servicep: ServiceImportacionService,
               public db: AngularFirestore) { }

  ngOnInit(): void {

     this.servicep.obtenerProductos().subscribe(data =>{
       this.items = data;
    });
     


  }

  verProducto(){

  }

  buscar(){

  }

  nuevo(){
    
  this.router.navigate(['comprasNuevoProducto']);
  }

  irProducto(item: any){
    
    this.router.navigate(['comprasProducto',item]);
  }

}
