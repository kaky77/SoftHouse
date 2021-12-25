import { Injectable } from '@angular/core';
import { Job } from 'src/app/models/job';
import { Subject } from 'rxjs';
import { DataSnapshot, getDatabase, onValue, ref, set } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  // aurez un array local  books  et un Subject pour l'émettre ;
  job: Job[] = [];
  jobsSubject = new Subject<Job[]>();

  constructor() {
    this.getJob();
  }
  emitjob() {
    this.jobsSubject.next(this.job);
  }

  saveJob() {
    const db = getDatabase();
    console.log(db);
   set(ref(db, 'Services/Job'),{
    // bookName:this.books,
  
    ...this.job,//chaque élément du tableau est convertit en objet dans la base de donnée 
   });
  }
 
  //pour récupérer la liste des livres depuis le serveur,
  getJob() {
    const db = getDatabase();
      onValue(ref(db, 'Services/Job'), (data: DataSnapshot) => {
          this.job = data.val() ? data.val() : [];
          this.emitjob();
        }
      );
  }

    //pour récupérer un seul livre,
  getSingleJob(id: number) {
    return new Promise(
      (resolve, reject) => {
        onValue(ref(getDatabase(),'/Services/Job/' + id),then(
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
  createNewJob(newJob:  Job) {
    this.job.push(newJob);
    this. saveJob();
    this.emitjob();
  }

  //pour supprimer un livre existant.
  removeBook(book: Job) {
    const bookIndexToRemove = this. job.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true;
        }
        return false;
      }
    );
    this. job.splice(bookIndexToRemove, 1);
    this.saveJob();
    this.emitjob();
  }

}
function then(arg0: (data: DataSnapshot) => void, arg1: (error: any) => void): (snapshot: DataSnapshot) => unknown {
  throw new Error('Function not implemented.');
}

