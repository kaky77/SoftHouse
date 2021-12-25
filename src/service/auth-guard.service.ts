import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  //créer  AuthGuardService  et l'appliquer aux routes concernées.  Puisque la vérification de l'authentification est asynchrone, votre service
  // retournera une Promise :
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
              if(user) {
                resolve(true);
              } else {
                this.router.navigate(['/Auth', 'signin']);
                resolve(false);
              }
            }
          );
        }
      );
    
  }


}//end AuthGuardService 
