import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento'

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  evento:any;

  constructor(public provider: EventoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.evento = navParams.get("evento");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
