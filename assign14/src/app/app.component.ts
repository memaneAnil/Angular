import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jayganesh';

  loginform : FormGroup;

  constructor(fb:FormBuilder)
  {
    
    this.loginform = fb.group(
      {firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      lname:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      add:new FormControl('')
      });
    
  }

  public onpress()
  {
    console.log(this.loginform.get("firstname"))
  }

  get FirstName(){
    return this.loginform.get('firstname')as FormControl;
  }
  get PhoneNumber(){
    return this.loginform.get('phone') as FormControl;
  }
  get Email(){
    return this.loginform.get('email') as FormControl;
  }
  /*move()
  {
    return closed;
  }*/
}
