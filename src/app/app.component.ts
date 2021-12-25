import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from '@firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SoftHouse';
  public lastUpdate = new Date();
  constructor(){
    const firebaseconfig={
      apiKey: "AIzaSyDvtchOm7lRsxaTrJBp_R7KL-dGiJrwWF4",
      authDomain: "soft-house-da793.firebaseapp.com",
      projectId: "soft-house-da793",
      storageBucket: "soft-house-da793.appspot.com",
      messagingSenderId: "330540994735",
      appId: "1:330540994735:web:f57906fc579a6309af045a",
      measurementId: "G-NNGDQGJV2X"
    };
    firebase.initializeApp(firebaseconfig);
    // initialize firbase 
    const app= initializeApp(firebaseconfig);
    const analytics = getAnalytics(app);
  }// end constructor
}// end AppComponent  
