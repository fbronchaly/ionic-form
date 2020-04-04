import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = navParams.get('nombre');
     let name = navParams.get('password');
     console.log (id, name);

  }

}
