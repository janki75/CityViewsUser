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
<<<<<<< HEAD
ownerId:number=parseInt(localStorage.getItem('ownerId'));
=======
ownerId:number=parseInt(localStorage.getItem('Id'));
>>>>>>> b5be623cda5466becd805633d6c94092eaa9fa24
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
