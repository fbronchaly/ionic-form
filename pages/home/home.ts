import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
input: string;
usuario = {
  nombre:"",
  password:""
}



constructor(public navCtrl: NavController) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

}
