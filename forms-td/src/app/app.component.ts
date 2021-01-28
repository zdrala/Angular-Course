import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm:NgForm;

  defaultAnswer="teacher";
  answer='';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'email@valid.com'
    //   },
    //   secret:'teacher',
    //   questionAnswer:'a'
    // });
    this.signUpForm.form.patchValue({
      userData:{
      username:suggestedName
      }
    });
  }
  // onSubmit(form: NgForm)
  // {
  //  console.log(form);
  // }
  onSubmit()
  {
   console.log(this.signUpForm);
  }
}
