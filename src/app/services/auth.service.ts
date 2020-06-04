import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public aFAuth:AngularFireAuth) { }

  loginUser(value){
    return this.aFAuth.signInWithEmailAndPassword(value.email, value.password).then((value)=>console.log(value)
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('aqui')
      
      // ...
    });
  }

  logout() {
    return this.aFAuth.signOut();
  }

}
