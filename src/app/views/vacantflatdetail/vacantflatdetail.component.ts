import { flat_class } from './../../classes/flat';
import { FlatService } from './../../services/flat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-vacantflatdetail',
  templateUrl: './vacantflatdetail.component.html',
  styleUrls: ['./vacantflatdetail.component.css']
})
export class VacantflatdetailComponent implements OnInit {
  flatId:number;
  flatNo:string;
   occupied:boolean;
   bhk:number;
  parkingSlot:string;
  constructor(private _acroute:ActivatedRoute,private _flatserv:FlatService,private _route:Router) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.flatId=x['id'];
        this._flatserv.getFlatById(this.flatId).subscribe(
          (data:flat_class)=>{
            console.log(data);
            this.flatNo=data.flatNo;
            this.occupied=data.occupied;
            this.bhk=data.bhk;
            this.parkingSlot=data.parkingSlot;

          }
        );

      }
    );
  }

}
