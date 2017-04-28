import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';
import { Datos } from '../../providers/datos';
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html'
})
export class BienvenidaPage {

  constructor(public navCtrl: NavController,public param: NavParams, public datos:Datos ) {

  }

  irFormulario(){
    this.navCtrl.push(FormularioPage);
  }

}