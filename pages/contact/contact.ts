import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  id: string;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('nombre');
    this.name = navParams.get('password');
     console.log (this.id, this.name);

  }

}
