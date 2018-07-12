import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { EventoPage } from '../../pages/evento/evento';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: any;
  loginData = {email: '', password: ''};
  data: any;
  constructor(public toastCtrl: ToastController,public loadingCtrl: LoadingController,public authService: UsuarioProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  doLogin(){
    this.showLoader();
    this.authService.loginUsuario(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      this.authService.getUsuarioToken();
      this.navCtrl.setRoot(EventoPage);
    
    }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      }
      
    );
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
