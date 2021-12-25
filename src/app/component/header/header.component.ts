import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth!:boolean;

  constructor(private authService: AuthService) {
   
  }
  //pour afficher de manière contextuelle les liens de connexion, de création d'utilisateur et de déconnexion :
  ngOnInit(): void {
    //Obtenir l'utilisateur actuellement connecté
  //La méthode recommandée pour obtenir l'utilisateur actuel consiste à définir un observateur sur l'objet Auth 
  //Ici, vous utilisez  onAuthStateChanged() , qui permet d'observer l'état de l'authentification de l'utilisateur : à chaque changement d'état,
  // la fonction que vous passez en argument est exécutée.  Si l'utilisateur est bien authentifié,  onAuthStateChanged()  reçoit l'objet de type  
  //firebase.User
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    this.isAuth = true;
    // ...
    } else {
    // User is signed out
    this.isAuth = false;
    // ...
    }
  });
  }//end ngOnInit

  onSignOut() {
    this.authService.signOutUser();
  }//end onSignOut

}//end  HeaderComponent
