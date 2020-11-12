import { ComplaintService } from './../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { complaint_Class } from 'src/app/classes/complaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private _compserv:ComplaintService) { }
  arrcomplaint:complaint_Class[]=[];
  ngOnInit() {
    this._compserv.getAllComplaints().subscribe(
      (data:complaint_Class[])=>{
        this.arrcomplaint=data;
      }
    );
  }

}
