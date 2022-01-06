import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-soft-house',
  templateUrl: './soft-house.component.html',
  styleUrls: ['./soft-house.component.scss']
})
export class SoftHouseComponent implements OnInit {

  @Input() likesCount: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  title = 'ng-carousel-demo';
   
  onclick(){
    this.likesCount++;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides = [
    {id: 1, img: "assets/img/S1.jpg"},
    {id: 2, img: "assets/img/S2.jpg"},
    {id: 3, img: "assets/img/S3.jpg"},
    {id: 4, img: "assets/img/S5.jpg"}
  ];
}
