import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-assignment',
  templateUrl: './td-assignment.component.html',
  styleUrls: ['./td-assignment.component.css']
})
export class TdAssignmentComponent implements OnInit {
  @ViewChild('f') form:NgForm;
  defaultSelect='advanced';
  submitted=false;
  data={
    email:'',
    subscription:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {  
   this.submitted=true;
   this.data.email=this.form.value.email;
   this.data.subscription=this.form.value.subscription;
   this.data.password=this.form.value.password;
   this.form.reset();
  }
}
