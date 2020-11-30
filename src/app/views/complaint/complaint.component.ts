import { complaint_Class } from './../../classes/complaint';
import { ComplaintService } from './../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private route:Router,private _compserv:ComplaintService,public _location:Location) { }
  arrcomplaint:complaint_Class[]=[];
   id:number;
   date:Date;
msg:string="";
   upVote:number=0;
   downVote:number=0;
   status:number=0;
 ownerId:number=2; //localStorage.getItem('ownerId'); //change this after login is added.temporary it is static
  description:string;
  datestr:string;

  //for edit
  editid:number;

  msg1:string="";
  d1:string;
  upV:number;
   downv:number;
   stat:number;
 ownId:number=2; //localStorage.getItem('ownerId'); //change this after login is added.temporary it is static
  descri:string;


  errmsg:string="";
  ngOnInit() {

    this.date=new Date();
this.getAllComplaint();

  }
  getAllComplaint()
  {
    this._compserv.getAllComplaints().subscribe(
      (data:complaint_Class[])=>{
        this.arrcomplaint=data;
      }
    );
  }
  onclickupvote(item:complaint_Class)
  {

    this._compserv.updateUpvote(item).subscribe(
      (data:complaint_Class[])=>{
        this.ngOnInit();
      }
    );
  }
  onclickdownvote(item:complaint_Class)
  {
    this._compserv.updateDownVote(item).subscribe(
      (data:complaint_Class[])=>{
        this.ngOnInit();

      }
    );
  }
  onsave()
  {

    let c;
    let d=this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear();
    this.datestr=d.toString();
    this._compserv.addComplaint(new complaint_Class(this.id,this.datestr,this.description,this.upVote,this.downVote,this.status,this.ownerId)).subscribe(
      (data:complaint_Class)=>{
        console.log(data);
         }
    );
    this.msg="complaint successfully added!!";
  }
  onedit(item)
  {
   this.editid=item.id;
   this._compserv.getComplaintById(this.editid).subscribe(
    (data:complaint_Class)=>{
      this.descri=data.description;
      this.d1=data.date;
      this.upV=data.upVote;
      this.downv=data.downVote;
      this.stat=data.status;
      this.ownId=data.ownerId;
    }
  );
  }
  onclose()
  {
    this.ngOnInit();
  }
  onadd()
  {
    this.msg="";
    this.description="";
  }
  onsavechanges()
  {

    this._compserv.updateComplaint(new complaint_Class(this.editid,this.d1,this.descri,this.upV,this.downv,this.stat,this.ownId)).subscribe(
      (data:complaint_Class)=>{
      }
    );
    this.msg1="Complaint Update successfully!!";
  }
  onclickmycomplaints()
  {
    this.route.navigate(['/mycomplaint']);
  }
  ondisableclick()
  {
    alert("You can't upvote to a complaint which is resolved or rejected!!");

  }
  ondisabledownvote()
  {
    alert("You can't downvote to a complaint which is resolved or rejected!!");
  }
}
