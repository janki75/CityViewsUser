import { FlatService } from 'src/app/services/flat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { flat_class } from 'src/app/classes/flat';

@Component({
  selector: 'app-flatdetail',
  templateUrl: './flatdetail.component.html',
  styleUrls: ['./flatdetail.component.css']
})
export class FlatdetailComponent implements OnInit {

  constructor(private _acroute:ActivatedRoute,private _flatserv:FlatService) { }
  flatId:number;
  flatNo:string;
   occupied:boolean;
   bhk:number;
  parkingSlot:string;
  ownerId:number;
  ownerName:string;
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
            this.ownerId=data.ownerId;
            this.ownerName=data.ownerName;

          }
        );

      }
    );
  }

}
