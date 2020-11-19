import { ComplaintService } from './../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { complaint_Class } from 'src/app/classes/complaint';

@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MycomplaintComponent implements OnInit {
i:number=0;
ownerId:number=1;  //localStorage.getItem('ownerId');   //change this after login is added
  constructor(private _compserv:ComplaintService) { }
arrcomplaint:complaint_Class[]=[];
  ngOnInit() {
    this._compserv.getAllComplaints().subscribe(
      (data:complaint_Class[])=>{
        for(this.i=0;this.i<data.length;this.i++)
        {
         if(data[this.i].status==1 && data[this.i].ownerId==this.ownerId)
         {
          this.arrcomplaint.push(data[this.i]);
         } 
        }
      }
    );
    console.log(this.arrcomplaint);
  }

}
