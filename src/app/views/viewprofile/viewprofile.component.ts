import { Component, OnInit } from '@angular/core';
import { owner_class } from "../../classes/owner";
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  arr:owner_class[]=[];
  ownerId:number;
  name:string;
  contactNo:string;
  email:string;
  dateOfPurchase:Date;
  active:boolean;
  password:string;


  constructor(private _route:Router, private _ownservice:OwnerService, private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.email=localStorage.getItem('ownerId');
    // this._acroute.params.subscribe(
    //   (x:Params)=>{
    //     this.email=x['email'];
        this._ownservice.getownerByemail(this.email).subscribe(
          (data:any)=>{
            console.log(data);
            this.arr=data;
            this.ownerId=data.id;
            this.name=data.name;
            this.contactNo=data.contactNo;
            this.email=data.email;
            this.dateOfPurchase=data.dateOfPurchase;
            this.active=data.active;
            this.password=data.password;
          }
        )
    //   }
    // )
    
  }

  manageprofile(){
    console.log(this.ownerId);
    this._route.navigate(["viewprofile/manageprofile",this.ownerId]);
  }

  changepass(){
    console.log(this.ownerId);
    this._route.navigate(["viewprofile/changepassword",this.ownerId]);
  }

}
