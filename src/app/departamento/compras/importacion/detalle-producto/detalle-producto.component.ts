// import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import jsPDF from 'jspdf';
import { PruebaService } from '../../../../services/prueba.service';
import { ServiceImportacionService } from '../../../../services/compras/service-importacion.service';
import jsPDF from 'jspdf';
import { ProductoImportacionInterface } from 'src/app/models/Compras/productos_importacionInterface';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  productodata: any = {nombre:""};
  datos: any;

  constructor(private aRoute: ActivatedRoute,
              private router: Router,
              private serv: ServiceImportacionService) {

    aRoute.params.subscribe( parms =>{
      
      serv.obtenerProducto(parms.id).subscribe(pruductodata=>{
        this.productodata = pruductodata;
      })
    });

    serv.obtenerDatosEmpresa().subscribe(datos =>{
      
      this.datos = datos;
  
    })



    // aRoute.params.subscribe( params => {
    //   console.log('que pues',params);
    // });
    // this.servicep.getdatos().subscribe( d =>{
    //   this.datos = d;
    //   console.log(this.datos);
    //   });
  }

  ngOnInit(): void {
  }

  imprime(){
     
    
    let linea: any = 20;
    let columna: any = 25;
    let espaciado: any = 7;        
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [216, 279]
    });
  
    
  
    doc.setFontSize(12);

      
    
    

    doc.roundedRect(20, (linea-10), 176, 120, 10, 10, 'S');
    doc.text(`NOMBRE:  ${this.productodata.nombre.toUpperCase()}`,columna,linea);
    doc.text(`MODELO:  ${this.productodata.modelo.toUpperCase()}`,columna+100,linea);linea += espaciado; 
    doc.text(`CANTIDAD:  ${this.datos.cantidad.toUpperCase()} `,columna,linea);linea += espaciado;
    doc.text(`FABRICANTE:  ${this.productodata.fabricante.toUpperCase()}`,columna,linea);linea += espaciado;
    doc.text(`PAIS DE ORIGEN:  ${this.productodata.paisOrigen.toUpperCase()}`,columna,linea); linea += espaciado;
    doc.text(`IMPORTADOR:  ${this.datos.importador.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*3;
    doc.text(`RFC:  ${this.datos.rfc.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado;
    doc.text(`ADVERTENCIA:  ${this.productodata.advertencia.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*2;
    doc.text(`MODO DE USO:  ${this.productodata.modoUso.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*2;
    doc.text(`${this.datos.garantia.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado*2;
    doc.text(`${this.datos.leyenda.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado;
    doc.text(`${this.datos.normas.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado*2;

    doc.roundedRect(20, (linea), 176, 120, 10, 10, 'S');linea += 10;

    doc.text(`NOMBRE:  ${this.productodata.nombre.toUpperCase()}`,columna,linea);
    doc.text(`MODELO:  ${this.productodata.modelo.toUpperCase()}`,columna+100,linea);linea += espaciado; 
    doc.text(`CANTIDAD:  ${this.datos.cantidad.toUpperCase()} `,columna,linea);linea += espaciado;
    doc.text(`FABRICANTE:  ${this.productodata.fabricante.toUpperCase()}`,columna,linea);linea += espaciado;
    doc.text(`PAIS DE ORIGEN:  ${this.productodata.paisOrigen.toUpperCase()}`,columna,linea); linea += espaciado;
    doc.text(`IMPORTADOR:  ${this.datos.importador.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*3;
    doc.text(`RFC:  ${this.datos.rfc.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado;
    doc.text(`ADVERTENCIA:  ${this.productodata.advertencia.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*2;
    doc.text(`MODO DE USO:  ${this.productodata.modoUso.toUpperCase()}`,columna,linea,{maxWidth: 167});linea += espaciado*2;
    doc.text(`${this.datos.garantia.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado*2;
    doc.text(`${this.datos.leyenda.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado;
    doc.text(`${this.datos.normas.toUpperCase()}`,108,linea,{maxWidth: 167,align: "center" });linea += espaciado*2;
  
   
  
    
  
  
  
  
  
    doc.save(`${this.productodata.nombre}-${this.productodata.modelo}.pdf`);
    this.router.navigate(['comprasImportacion']);
  }

  regresar(){
  this.router.navigate(['comprasImportacion'])
  }

}
