import { FlatService } from './../../services/flat.service';
import { Component, OnInit } from '@angular/core';
import { flat_class } from 'src/app/classes/flat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacantflat',
  templateUrl: './vacantflat.component.html',
  styleUrls: ['./vacantflat.component.css']
})
export class VacantflatComponent implements OnInit {

  constructor(private _flatserv:FlatService,private _route:Router) { }
  arrflat:flat_class[]=[];
  ngOnInit() {
    this._flatserv.getallvacantflats().subscribe(
      (data:flat_class[])=>{
        console.log("hi");
        this.arrflat=data;
        console.log(data);
      }
    );
  }
  onclick(flatId:number)
  {
    this._route.navigate(['/vacantflatdetail',flatId]);
  }

}
