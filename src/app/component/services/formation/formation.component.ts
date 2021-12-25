import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/service/formation.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  UserForm!: FormGroup;
  motpasse : any = 'kakyT';

  constructor(private formBuilder:FormBuilder,
              private userService:FormationService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.UserForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      tel: 0 ,
      email: '',
      langage: '',
      certification: '',
    });
  }

  onSubmitForm(){
    const formValue=this.UserForm.value;
    const newUser = new Formation(
      formValue['firstName'],
      formValue['lastName'],
      formValue['tel'],
      formValue['email'],
      formValue['langage'],
      formValue['certification'],
    );
    this.userService.createNewFormation(newUser);
    setTimeout(()=>{
      alert("votre requette a été validé. nous vous contacterons sous peu. veuillez vérifier regulièrement votre courriel. Merci ")
    },1000);
    
  }

  onSubmit(form: NgForm) {
    const password=form.value['list'];
    if(password==this.motpasse)
    {
      this.router.navigate(['Services/', 'listformation']);
    } else {
       alert("vous n'avez pas droit à ce service ou peut-etre le mot de passe est érroné")
    }
  }

}
