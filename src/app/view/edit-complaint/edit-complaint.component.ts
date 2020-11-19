import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';
import { complaint_Class } from 'src/app/classes/complaint';

@Component({
  selector: 'app-edit-complaint',
  templateUrl: './edit-complaint.component.html',
  styleUrls: ['./edit-complaint.component.css']
})
export class EditComplaintComponent implements OnInit {
id:number;

        date:string;
         description:string;
        upVote:number;
         downVote:number;
        status:number;
         ownerId:number;
         msg:string="";
  constructor(private route:Router,private _acroute:ActivatedRoute,private _comserv:ComplaintService) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.id=x['id'];
        this._comserv.getComplaintById(this.id).subscribe(
          (data:complaint_Class)=>{
            this.date=data.date;
            console.log(this.date);
            this.description=data.description;
            this.upVote=data.upVote;
            this.downVote=data.downVote;
            this.status=data.status;
            this.ownerId=data.ownerId;
          }
        );

      }
    );
  }
  onedit()
  {
    this._comserv.updateComplaint(new complaint_Class(this.id,this.date,this.description,this.upVote,this.downVote,this.status,this.ownerId)).subscribe(
      (data:complaint_Class)=>{
this.msg="Complaint Update successfully!!";
      }
    );
    
  }
  

}
