import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { login } from 'src/app/classes/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router,private _ownerserv:OwnerService) { }
  email:string;
  password:string;
  hide:boolean=true;
  ngOnInit() {
  }
  onlogin()
  {
  
    this._ownerserv.login(new login(this.email,this.password)).subscribe(
      (data:login[])=>{
        console.log(data);
        if(data==null || this.email=='admin@gmail.com')
        {
          alert("your email or password is wrong!!");
        }
        else
        {
          localStorage.setItem('ownerId',this.email);
          this._route.navigate(['/home']);
         
        }
      }
    );
    
  }
  onforget()
  {

    this._route.navigate(['/forgetpassword']);
  }


}
