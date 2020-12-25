import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { login } from 'src/app/classes/login';
import { owner_class } from 'src/app/classes/owner';

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
  id:number;

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
          this._ownerserv.getownerByemail(this.email).subscribe(
            (data:any)=>{
              this.id=data.id;
              console.log(this.id);
              localStorage.setItem('Id',this.id+'');
            }
          );
        
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
