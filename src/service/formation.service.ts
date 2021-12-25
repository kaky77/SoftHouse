import { Injectable } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Subject } from 'rxjs';
import { DataSnapshot, getDatabase, onValue, ref, set } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  // aurez un array local  books  et un Subject pour l'émettre ;
  formations: Formation[] = [];
  formationsSubject = new Subject<Formation[]>();

  constructor() {
    this.getFormation();
   }

   emitformation() {
    this.formationsSubject.next(this. formations);
  }

  saveFormation() {
    const db = getDatabase();
    console.log(db);
   set(ref(db, 'Services/Formation'),{
    // bookName:this.books,
  
    ...this.formations,//chaque élément du tableau est convertit en objet dans la base de donnée 
   });
  }

   //pour récupérer la liste des livres depuis le serveur,
  getFormation() {
    const db = getDatabase();
      onValue(ref(db, 'Services/Formation'), (data: DataSnapshot) => {
          this.formations = data.val() ? data.val() : [];
          this.emitformation();
        }
      );
  }

    //pour récupérer un seul livre,
    getSingleFormation(id: number) {
      return new Promise(
        (resolve, reject) => {
          onValue(ref(getDatabase(),'/Services/Formation/' + id),then(
            (data: DataSnapshot) => {
              resolve(data.val());
            }, (error: any) => {
              reject(error);
            }
          ));
        }
      ); 
    }

   //pour créer un nouveau livre,
  createNewFormation(newFormation:  Formation) {
    this.formations.push(newFormation);
    this. saveFormation();
    this.emitformation();
  }

  //pour supprimer un livre existant.
  removeBook(book: Formation) {
    const bookIndexToRemove = this.formations.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true;
        }
        return false;
      }
    );
    this.formations.splice(bookIndexToRemove, 1);
    this.saveFormation();
    this.emitformation();
  }

}
function then(arg0: (data: DataSnapshot) => void, arg1: (error: any) => void): (snapshot: DataSnapshot) => unknown {
  throw new Error('Function not implemented.');
}

