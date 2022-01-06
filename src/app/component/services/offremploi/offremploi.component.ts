import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/service/job.service';

@Component({
  selector: 'app-offremploi',
  templateUrl: './offremploi.component.html',
  styleUrls: ['./offremploi.component.scss']
})
export class OffremploiComponent implements OnInit {

  motpasse : any = 'kakyT';
  pass : boolean=false;
  job!:Job[];
  jobSubscription!: Subscription;

  constructor( private jobService:JobService,private router: Router
  ) { }

  ngOnInit(): void {
    this.jobSubscription = this.jobService.jobsSubject.subscribe(
      (job: Job[]) => {
        this.job = job;
      }
    );
    this.jobService.emitjob();
  }
   
  onSubmit(form: NgForm) {
    const password=form.value['list'];
    if(password==this.motpasse)
    {
      alert("vous aurez 7 secondes pour avoir la possibilité de supprimer des emplois.Sinon patienter pour avoir la possibilité d'ajouter des Emplois")
      this.pass=true;
      setTimeout(()=>{
        this.router.navigate(['Services/', 'listEmplois']);
      },7000);
      
    } else {
       alert("vous n'avez pas droit à ce service ou peut-etre le mot de passe est érroné")
    }
  }

  onDeleteBook(job: Job) { 
   
    this.jobService.removeBook(job);
  }

  ngOnDestroy() {
    this. jobSubscription.unsubscribe();
  }



}
