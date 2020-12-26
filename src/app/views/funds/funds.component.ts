import { Component, OnInit } from '@angular/core';
import { fund_class } from 'src/app/classes/fund';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
ownerid:string=localStorage.getItem('Id');
fundarr:fund_class[]=[];
i:number;
  constructor(private fundser:FundService) { }

  ngOnInit() {
    var oid=parseInt(this.ownerid);
    console.log(oid);

}
}
