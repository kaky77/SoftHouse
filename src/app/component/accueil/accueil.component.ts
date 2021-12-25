import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onConception() {
    this.router.navigate(['Services/', 'Conception']);
  }

  onExpertise() {
    this.router.navigate(['Services/', 'Expertise']);
  }

  onJob() {
    this.router.navigate(['Services/', 'Offremploi']);
  }

  onFormation() {
    this.router.navigate(['Services/', 'formation']);
  }



}
