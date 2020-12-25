import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { owner_class } from 'src/app/classes/owner';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email:string='';
  i:number=0;
  flag:number=0;
  ownerId:number;
  errmsg:string="";
  constructor(private _route:Router,private _onnerserv:OwnerService) { }

  ngOnInit() {
  }
  onsubmit()
  {
    this._route.navigate(['/login']);
  }
  onforgetpassword()
  {
    this._onnerserv.getallowner().subscribe(
      (data:owner_class[])=>{
        for(this.i=0;this.i<data.length;this.i++)
        {
          if(data[this.i].email==this.email)
          {
            this.flag=1;
            break;
          }
        }
        if(this.flag==1)
        {
          this._onnerserv.getOwnerByEmail(this.email).subscribe(
            (data:any)=>{
            this.ownerId=data.id;
            this._onnerserv.forgetpassword(this.ownerId).subscribe(
              (data:any)=>{
               
              }
            );
            alert("password Successfully sent to the your emailid");
            this._route.navigate(['']);
            
            }
          );
        }
        else
        {
          this.errmsg="Please Enter your registered emailid!!"
        }
      }
    );

  }

}
