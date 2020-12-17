import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form} from '@angular/forms';
import { PruebaService } from '../../../../services/prueba.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

 
  form: FormGroup;
  dataanterior : any = {nombre:"", modelo:"",paisOrigen:"",fabricante:"",advertencia:"", modoUso:""}
  
  

  constructor(private formbuilder: FormBuilder,
              private ser: PruebaService,
              private router: Router) { 
                this.buildForm();
  
  }

  ngOnInit(): void {
   
  }



  private buildForm(){
    this.form = this.formbuilder.group({
      nombre: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      paisOrigen: ['', [Validators.required]],
      fabricante: ['', [Validators.required]],
      advertencia: ['', [Validators.required]],
      modoUso: ['', [Validators.required]],
    });  }

  

  save(event: Event){
      event.preventDefault();
      console.log(this.form.value);
      const value = this.form.value;      
      

      console.log(this.ser.additem(value));

       
      
      
  }

  cancelar(){
  this.router.navigate(['comprasImportacion'])
  }

    

}
