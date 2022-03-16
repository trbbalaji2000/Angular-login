import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {LoginService} from '../../Services/login.service'
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
  loginform:any=FormGroup;
  submit:any=false

  constructor(private route:Router,private formbuilder:FormBuilder,private loginlinks: LoginService) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login()
  {
this.submit=true;
if(this.loginform.invalid)
{
  return
}
this.loginlinks.loginpage(this.loginform.value).subscribe(data=>{
 console.log(data)
if(data=="Welcome")
{
  this.route.navigate(["board"])
}
else
{
  alert("Invalid Username and Password")
}
})
  }

}
