import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { owner_class } from '../../classes/owner';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  ownerId:number;
  name:string;
  contactNo:string;
  email:string;
  dateOfPurchase:Date;
  active:boolean;
  password:string;
  oldpassword:string;
  newpassword:string;
  renewpassword:string;

 
    constructor(private _ownservice:OwnerService, private _acroute:ActivatedRoute, private _route : Router) { }
  
    ngOnInit() {
      this._acroute.params.subscribe(
        (x:Params)=>{
          this.ownerId=x['id'];
          this._ownservice.getownerById(this.ownerId).subscribe(
          (data:owner_class)=>{
            console.log(data);
            this.active=data.active;
            this.name=data.name; 
            this.contactNo=data.contactNo;
            this.email=data.email;
            this.password=data.password;
            this.dateOfPurchase=data.dateOfPurchase;
          }
          );
        }
      );
    
    }


    changepassword(){

      if(this.oldpassword==this.password){
        if(this.newpassword==this.renewpassword){
          this._ownservice.updateownerdetails(new owner_class(this.ownerId,this.name,this.contactNo,this.email,this.dateOfPurchase,this.active,this.newpassword)).subscribe(
            (data:any)=>{
              console.log(data)
            }
          );
          alert("Password updated successfully! You'll be redirected to login page!");
          this._route.navigate(['/viewprofile',this.email]);
        }
        else{
          alert("New Password and Confirm New Password are not the same")
        }
      }
      else{
        alert("Please Enter Correct Current Password")
      }

    }



    goBack() {
      console.log(this.email);
      this._route.navigate(["/viewprofile",this.email]);
    }
}
