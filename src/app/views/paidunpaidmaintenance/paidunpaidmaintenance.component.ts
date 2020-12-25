import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-paidunpaidmaintenance',
  templateUrl: './paidunpaidmaintenance.component.html',
  styleUrls: ['./paidunpaidmaintenance.component.css']
})
export class PaidunpaidmaintenanceComponent implements OnInit {

  flatId:number;
  constructor(private _actorute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this._actorute.params.subscribe(
      (x:Params)=>{
        this.flatId=x['id'];
        console.log(this.flatId);
      }
    );

  }
  onshowpaid(flatId)
  {
 console.log(flatId);
 this._route.navigate(['\showmaintenance',flatId]);
  }
  onshowdue(flatId)
  {
    this._route.navigate(['\showunpaidmaintenance',flatId]);
  }

}
