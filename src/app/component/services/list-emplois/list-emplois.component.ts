import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/service/job.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emplois',
  templateUrl: './list-emplois.component.html',
  styleUrls: ['./list-emplois.component.scss']
})

export class ListEmploisComponent implements OnInit {

  public userForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private userService:JobService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      jobName:'',
      description:'', 
      Qualite :'',
      Salaire : '',
      type: '',
      horaire: '',
      teletravail: '',
    });
  }

  onSubmitForm(){
    const formValue=this.userForm.value;
    const newUser = new Job(
      formValue[' jobName'],
      formValue[' description'],
      formValue[' Qualite'],
      formValue['Salaire'],
      formValue['type'],
      formValue[' horaire'],
      formValue[' teletravail'],
    );
    this.userService.createNewJob(newUser);
    setTimeout(()=>{
      alert("offre d'emploi enrégistré. Merci ")
    },1000);
    
  }


}
