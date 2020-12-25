import { Component, OnInit } from '@angular/core';
import { maintenance_class } from '../../classes/maintenance';
import { MaintenanceService } from '../../services/maintenance.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-showunpaidmaintenance',
  templateUrl: './showunpaidmaintenance.component.html',
  styleUrls: ['./showunpaidmaintenance.component.css']
})
export class ShowunpaidmaintenanceComponent implements OnInit {
  arr:maintenance_class[]=[];
  flatId:number;
   maintenanceId:number;
   amount:number;
    date:string;
     month:number;
   paymentMode:string;
   mstr:string;
   unpaidstr:string="Maintenance Due";
   i:number;
   unpaidarr:any[]=[];
   j:number;
   flag:number;
  constructor(private ser:MaintenanceService,private _actroute:ActivatedRoute) { }

  ngOnInit() {
    this._actroute.params.subscribe(
      (x:Params)=>{
    this.flatId=x['id'];
    this.ser.getmaintenancebyflatid(this.flatId).subscribe(
     (data:any)=>
  {

    for(this.i=0;this.i<data.length;this.i++)
    {
      var todayyear=new Date().getFullYear().toString();
      var year=data[this.i].date.toString();
      var subyear=year.substring(6,12);
      //console.log(todayyear);
     if(todayyear==subyear)
     {
       this.arr.push(data[this.i]);




     }


    }
    //console.log(this.unpaidarr);

    for(this.i=1;this.i<=12;this.i++)
{

 this.flag=0;
  for(this.j=0;this.j<this.arr.length;this.j++)
  {

    if(this.i==this.arr[this.j].month)
    {

   this.flag=1;
   break;
    }

  }
  if(this.flag==0)
  {
   this.unpaidarr.push(this.i);

  }
}
console.log(this.unpaidarr);







  }
    );

      }
    );

  }

  }


