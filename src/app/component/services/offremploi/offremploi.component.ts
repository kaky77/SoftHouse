import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offremploi',
  templateUrl: './offremploi.component.html',
  styleUrls: ['./offremploi.component.scss']
})
export class OffremploiComponent implements OnInit {

  motpasse : any = 'kakyT';

  constructor(private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const password=form.value['list'];
    if(password==this.motpasse)
    {
      this.router.navigate(['Services/', 'listEmplois']);
    } else {
       alert("vous n'avez pas droit à ce service ou peut-etre le mot de passe est érroné")
    }
  }


}
