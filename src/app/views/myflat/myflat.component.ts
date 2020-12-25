import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlatService } from 'src/app/services/flat.service';
import { flat_class } from 'src/app/classes/flat';

@Component({
  selector: 'app-myflat',
  templateUrl: './myflat.component.html',
  styleUrls: ['./myflat.component.css']
})
export class MyflatComponent implements OnInit {

  constructor(private _flatserv:FlatService,private _route:Router) { }
   ownerId:number=parseInt(localStorage.getItem('ownerId'));;
  arrflat:flat_class[]=[];
  ngOnInit() {
    this._flatserv.getFlatsByOwnerId(2).subscribe(
      (data:flat_class[])=>{
        this.arrflat=data;
      }
    );
  }
  onclick(flatId:number)
  {
    this._route.navigate(['/flatdetail',flatId]);
  }

}
