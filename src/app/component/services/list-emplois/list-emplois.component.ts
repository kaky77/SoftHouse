import { Component, OnInit,OnDestroy } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/service/job.service';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
      Name :['',Validators.required],
      description :['',Validators.required], 
      Qualite :['',Validators.required],
      Salaire :['',Validators.required],
      type :['',Validators.required],
      horaire :['',Validators.required],
      teletravail :['',Validators.required]
    });
  }

  onSubmitform(){
    if(this.userForm.invalid)
    {
      return;
    }
    const formValue=this.userForm.value;
    const newUser = new Job(
      formValue['Name']|| null,
      formValue['description']|| null,
      formValue['Qualite']|| null,
      formValue['Salaire']|| null,
      formValue['type']|| null,
      formValue['horaire']|| null,
      formValue['teletravail']|| null,
    );
    this.userService.createNewJob(newUser);
    
    alert("offre d'emploi enrégistré. Merci ")
  }

 


}
