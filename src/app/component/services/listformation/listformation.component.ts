import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/service/formation.service';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrls: ['./listformation.component.scss']
})
export class ListformationComponent implements OnInit, OnDestroy {

  formation!: Formation[];
  formationSubscription!: Subscription;
  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formationSubscription = this.formationService.formationsSubject.subscribe(
      (formation: Formation[]) => {
        this.formation = formation;
      }
    );
    this.formationService.emitformation();
  }

  onDeleteBook(formation: Formation) { 
    this.formationService.removeBook(formation);
  }

  ngOnDestroy() {
    this.formationSubscription.unsubscribe();
  }


}
