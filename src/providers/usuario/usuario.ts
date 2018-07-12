import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//let apiUrl = 'http://localhost:3000/'
localStorage.setItem('apiUrl','http://localhost:3000/')

@Injectable()
export class UsuarioProvider {

  constructor(public http: Http) {
    //console.log('Hello UsuarioProvider Provider');
  }

  registerUsuario(){

  }

  loginUsuario(credentials){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(localStorage.getItem('apiUrl') + 'login', JSON.stringify(credentials), { headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) =>{ reject(err)} );

    }
  
  );
    
  }

  getUsuario(email:String){
    

  }

  getUsuarioToken(){
    console.log(localStorage.getItem('token'));
  }

  deleteUsuario(){


  }



}
