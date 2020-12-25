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
<<<<<<< HEAD
  ownerId:number=2;
  //  ownerId:number=parseInt(localStorage.getItem('ownerId'));
=======
   ownerId:number=parseInt(localStorage.getItem('Id'));;
>>>>>>> b5be623cda5466becd805633d6c94092eaa9fa24
  arrflat:flat_class[]=[];
  ngOnInit() {
    console.log(localStorage.getItem('Id'));
    this._flatserv.getFlatsByOwnerId(this.ownerId).subscribe(
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
