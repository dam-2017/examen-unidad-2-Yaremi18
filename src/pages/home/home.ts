import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { NativeStorage } from 'ionic-native';
import { BienvenidaPage } from '../bienvenida/bienvenida';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Datos } from '../../providers/datos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myForm: FormGroup;
  public usuario: any;
  public usuar: any;
  public contra: any;
  constructor(public navCtrl: NavController, public fb: FormBuilder,public datos:Datos) {
    this.myForm = this.fb.group({
      'usuario': ['', [Validators.required,Validators.minLength(6),Validators.pattern(/^([a-z]+)$/)]],
      'contraseña': ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^[A-Za-z0-9\d$@$!%*?&]+$/)]],
    });
  }

  saveData(){
    if(this.usuar=='yaastorgana' && this.contra == '13400385@ittepic'){
      console.log(this.myForm.value);
      this.datos.Informacion = this.usuar;
      this.navCtrl.push(BienvenidaPage);
    }

  }

  irBienvenida(){
    this.navCtrl.push(BienvenidaPage);
  }



}
