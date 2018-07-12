import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EventoPage } from '../pages/evento/evento';
import { MeusEventosPage } from '../pages/meus-eventos/meus-eventos';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { EventosPage } from '../pages/eventos/eventos';

import { UsuarioProvider } from '../providers/usuario/usuario';
import { EventoProvider } from '../providers/evento/evento';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MeusEventosPage,
    MinhaContaPage,
    EventoPage,
    EventosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MeusEventosPage,
    MinhaContaPage,
    EventoPage,
    EventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    EventoProvider
  ]
})
export class AppModule {}
