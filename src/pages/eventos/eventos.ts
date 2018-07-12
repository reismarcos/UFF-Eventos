import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento'
import { ToastController} from 'ionic-angular';
import { EventoPage } from '../../pages/evento/evento';


/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos: any;
  constructor(public presentToast: ToastController,public provider: EventoProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

  getEvents(){
    //this.showLoader();
    this.provider.getEventos().then((result) => {
      this.eventos = result;      
    }, (err) => {
        
        
      }
      
    );
  }
  navigate(current_evento) {
    this.navCtrl.push(EventoPage, {
      evento: current_evento
    })
  }

}
