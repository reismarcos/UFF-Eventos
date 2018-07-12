import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  constructor(public http: Http) {
    //console.log('Hello EventoProvider Provider');
  }
  eventos:any;
  evento:any;

  getEventos(){
    return new Promise((resolve,reject) => {
      
      this.http.get(localStorage.getItem('apiUrl') + '/eventos')
      .map(res => res.json())
        .subscribe(data => {
         this.eventos = data;
          resolve(this.eventos);
      });

    });  

  }

  criaEvento(dados_evento){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(localStorage.getItem('apiUrl') + 'eventos', JSON.stringify(dados_evento), { headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) =>{ reject(err)} );

    }
  
  );
    
  }

  getEventoId(id){
    return new Promise((resolve,reject) => {
      
      this.http.get(localStorage.getItem('apiUrl') + '/eventos/' + id)
      .map(res => res.json())
        .subscribe(data => {
         this.evento = data;
          resolve(this.evento);
      });

    });  

  }


}
