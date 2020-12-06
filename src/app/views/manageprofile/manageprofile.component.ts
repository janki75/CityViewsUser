import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { owner_class } from '../../classes/owner';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.css']
})
export class ManageprofileComponent implements OnInit {

  ownerId:number;
  name:string;
  contactNo:string;
  email:string;
  dateOfPurchase:Date;
  active:boolean;
  password:string;
  allemail:string[]=[];
  i:number;
  j:number;
  flag:number=0;
  emailreserved:string;
  currentemail:string;
 
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
            this.currentemail=data.email
            this.password=data.password;
            this.dateOfPurchase=data.dateOfPurchase;
            
          }
          );
        }
      );

      this._ownservice.getallowner().subscribe(
        (data:owner_class[])=>{
            this.i=0;
            console.log(data);
            for(this.i=0;this.i<data.length;this.i++)
            {
              this.allemail.push(data[this.i].email);
              // console.log(this.alldate);
            }
            console.log(this.allemail);

        }
      )
    
    }


    updateprofile(){
      for(this.j=0;this.j<this.allemail.length;this.j++){
        if(this.allemail[this.j]==this.email && this.currentemail!=this.email){
          this.flag=1
        }
    }

     if(this.flag==0){
      console.log(this.ownerId);
      this._ownservice.updateownerdetails(new owner_class(this.ownerId,this.name,this.contactNo,this.email,this.dateOfPurchase,this.active,this.password)).subscribe(
        (data:any)=>{
          console.log(data)
        }
      );
      alert("Profile updated successfully!");
      this._route.navigate(['/viewprofile']);
    }
    else{
      this.emailreserved="Email already registered: Please select some other email";
      this.flag=0;
    }
    }



    goBack() {
      this._route.navigate(["/viewprofile"]);
    }
  
}
