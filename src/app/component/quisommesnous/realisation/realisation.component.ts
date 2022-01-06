import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit {

  @Input() likesCount: number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.likesCount++;
  }

}
