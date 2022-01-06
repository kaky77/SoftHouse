import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conception } from 'src/app/models/conception';
import { ListService } from 'src/service/list.service';


@Component({
  selector: 'app-conception',
  templateUrl: './conception.component.html',
  styleUrls: ['./conception.component.scss']
})
export class ConceptionComponent implements OnInit {

  userForm!: FormGroup;
  motpasse : any = 'kakyT';

  constructor(private formBuilder:FormBuilder,
              private userService:ListService,
              private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      tel: 0 ,
      email: ['',Validators.required],
      Job: ['',Validators.required],
      probleme: ['',Validators.required],
      attente: ['',Validators.required],
      application: ['',Validators.required]

    });
  }

  onSubmitForm(){
    if(this.userForm.invalid)
    {
      return;
    }
    const formValue=this.userForm.value;
    const newUser = new Conception(
      formValue['firstName'],
      formValue['lastName'],
      formValue['tel'],
      formValue['email'],
      formValue['Job'],
      formValue['probleme'],
      formValue['attente'],
      formValue['application'],
    );
    this.userService.createNewConception(newUser);
    setTimeout(()=>{
      alert("votre requette a été validé. nous vous contacterons sous peu. veuillez vérifier regulièrement votre courriel. Merci ")
    },1000);
    
  }
  
  onSubmit(form: NgForm) {
    const password=form.value['list'];
    if(password==this.motpasse)
    {
      this.router.navigate(['Services/', 'list']);
    } else {
       alert("vous n'avez pas droit à ce service ou peut-etre le mot de passe est érroné")
    }
  }

}
