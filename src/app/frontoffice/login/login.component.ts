import { Router } from '@angular/router';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup
  signupForm : FormGroup

  constructor(private FormBuilder:FormBuilder , private userservice: UserService,
  private router:Router){}
 
 

ngOnInit(){
this.signinForm = this.FormBuilder.group({
  username :['', Validators.required],
  password : ['', Validators.required]
});
this.signupForm = this.FormBuilder.group({
  username : ['', Validators.required],
  email : ['',[Validators.required, Validators.email]],
  password :['',[Validators.required, Validators.minLength(8),Validators.maxLength(12)]],
  role: ['user'],  
  active: [true]
})
}
submit(){
  this.userservice.createUser(this.signupForm.value).subscribe(
      {
        //next used when subscribtion return something
        next: (user) => { console.log("user", user) ;
          this.router.navigate(['/home']);
        },
        
        //complete used when no data returend only wait for the subscribtion to complete to do something
        complete: () => { console.log("done !") },
        //error catch err in the parameter and do whatever u want
        error: (err) => { console.log("err", err) }
      }
  )
}

login(){
 this.userservice.login(this.signinForm.value).subscribe((res)=>{
  if(res){
        
        this.router.navigate(['/home']);
      }else{
        console.log("Invalid credential","Logged in failed");

      }
 })
}
}
