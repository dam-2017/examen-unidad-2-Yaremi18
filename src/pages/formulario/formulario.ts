import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Datos } from '../../providers/datos';


@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html'
})
export class FormularioPage {
public myForm: FormGroup;
public rfcCreado: string = '';
public fecha:any;
public materno:string;
public paterno:string;
public nombre:string;




  constructor(public navCtrl: NavController, public fb: FormBuilder, public datos:Datos) {
    this.myForm = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido_mat': ['', Validators.required],
      'apellido_pat': ['', Validators.required],
      'fecha_nac': ['', Validators.required],
    });
  }

  construirRFC(){
      //2 paterno
      //1 materno
      //nombre 1
      //fecha año dos ultimos digitos
      //dos mes
      //dos dia
      var datos = this.myForm.value;
      console.log(datos);
      let paterno = datos.apellido_mat.split("");
      let materno = datos.apellido_mat.split("");
      let nombre =  datos.nombre.split("");
      let fecha = datos.fecha_nac.split("/");
      let año = fecha[0].split("");

      this.rfcCreado = ""+paterno[0]+paterno[1]+""+materno[1]+""+nombre[0]+año[2]+año[3]+""+fecha[1]+fecha[2];
  }

  saveData(){
      this.construirRFC();
  }

}