import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Conception } from 'src/app/models/conception';
import { ListService } from 'src/service/list.service';


@Component({
  selector: 'app-listconception',
  templateUrl: './listconception.component.html',
  styleUrls: ['./listconception.component.scss']
})
export class ListconceptionComponent implements OnInit, OnDestroy {

  conception!: Conception[];
  conceptionSubscription!: Subscription;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.conceptionSubscription = this.listService.conceptionsSubject.subscribe(
      (conception: Conception[]) => {
        this.conception = conception;
      }
    );
    this.listService.emitconception();
  }

  onDeleteBook(conception: Conception) {
    this.listService.removeBook(conception);
  }

  ngOnDestroy() {
    this.conceptionSubscription.unsubscribe();
  }

}
