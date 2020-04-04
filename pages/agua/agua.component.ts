import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css']
})
export class AguaComponent  {

  input: string;
usuario = {
garantia:"",
intervencion:""
}


  private garantiaIncendio:any[] = [
{
  garantia:"Incendio"
},
{
  garantia:"Explosión"
},
{
  garantia:"Conato de incendio"
},
{
  garantia:"Caída de rayo"
}
];

private intervieneBomberos:any[] = [
{
  intervencion:"Si"
},
{
  intervencion:"No"
}

];




constructor(public navCtrl: NavController) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

}