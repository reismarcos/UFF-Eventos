import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EventoPage } from '../pages/evento/evento';
import { MeusEventosPage } from '../pages/meus-eventos/meus-eventos';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { EventosPage } from '../pages/eventos/eventos';
//import { ListPage } from '../pages/list/list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();
  

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Meus Eventos', component: MeusEventosPage },
      { title: 'Evento', component: EventoPage },
      { title: 'Minha Conta', component: MinhaContaPage },
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

