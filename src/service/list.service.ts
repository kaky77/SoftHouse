import { Injectable } from '@angular/core';
import { Conception } from 'src/app/models/conception';
import { Subject } from 'rxjs';
import { DataSnapshot, getDatabase, onValue, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // aurez un array local  books  et un Subject pour l'émettre ;
  conceptions: Conception[] = [];
  conceptionsSubject = new Subject<Conception[]>();

  constructor() {
    this.getConception();
  }
  emitconception() {
    this.conceptionsSubject.next(this.conceptions);
  }

  saveConception() {
    const db = getDatabase();
    console.log(db);
   set(ref(db, 'Services/Conception'),{
    // bookName:this.books,
  
    ...this.conceptions,//chaque élément du tableau est convertit en objet dans la base de donnée 
   });
  }
 
  //pour récupérer la liste des livres depuis le serveur,
  getConception() {
    const db = getDatabase();
      onValue(ref(db, 'Services/Conception'), (data: DataSnapshot) => {
          this.conceptions = data.val() ? data.val() : [];
          this.emitconception();
        }
      );
  }

    //pour récupérer un seul livre,
  getSingleConception(id: number) {
    return new Promise(
      (resolve, reject) => {
        onValue(ref(getDatabase(),'/Services/Conception/' + id),then(
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
  createNewConception(newConception:  Conception) {
    this.conceptions.push(newConception);
    this. saveConception();
    this.emitconception();
  }

  //pour supprimer un livre existant.
  removeBook(book: Conception) {
    const bookIndexToRemove = this. conceptions.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true;
        }
        return false;
      }
    );
    this. conceptions.splice(bookIndexToRemove, 1);
    this.saveConception();
    this.emitconception();
  }

}


function then(arg0: (data: DataSnapshot) => void, arg1: (error: any) => void): (snapshot: DataSnapshot) => unknown {
  throw new Error('Function not implemented.');
}

