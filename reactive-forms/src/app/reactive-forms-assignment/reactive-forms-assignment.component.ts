import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.css']
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  form:FormGroup;
  dropdownValues=['Stable','Critical','Finished'];
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
    'projectName':new FormControl(null,Validators.required,this.forbiddenProjectNameAsync),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'select':new FormControl('Critical')
  });
  // this.form.statusChanges.subscribe(
  //   (value)=>{console.log(value);}
  // );
  }
   onSubmit(){
     console.log(this.form);
   }
   forbiddenProjectName(control: FormControl):{[s:string]:Boolean}
   {
      if(control.value==="Test")
      {
        return {nameIsForbidden:true};
      }
    return null;
   }
   forbiddenProjectNameAsync(control:FormControl):Promise<any>|Observable<any>{
     const promise=new Promise(
     (resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==="Test")
        {
          resolve({nameIsForbidden:true});
        }
        else
        {
          resolve(null);
        }
      },1000);
    });
       return promise;
     
   }
}
