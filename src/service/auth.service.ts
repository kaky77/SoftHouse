import { Injectable } from '@angular/core';
import * as firebase from  '@firebase/auth';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //une méthode permettant de créer un nouvel utilisateur ;
  createNewUser(email: string, password: string) {
    const auth = getAuth();
    return new Promise<void>(
      (resolve, reject) =>{createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        resolve();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
        // ..
      })
    }
   );
  
  }// end createNewUser 

  //une méthode permettant de connecter un utilisateur existant ;
  signInUser(email: string, password: string) {
    const auth = getAuth();
    return new Promise<void>(
      (resolve, reject) => {signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
        })
      }
    );
  
  }// end signInUser 

  //une méthode permettant la déconnexion de l'utilisateur.
  signOutUser() {
    const auth = getAuth();
    firebase.signOut(auth);
  }// end signOutUser 

}// end Authservice 
