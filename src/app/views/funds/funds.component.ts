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
msg:string="";
i:number;
  constructor(private fundser:FundService) { }

  ngOnInit() {
    var oid=parseInt(this.ownerid);
    console.log(oid);
    this.fundser.getfundbyid(oid).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<data.length;this.i++)
        {


          var todayyear=new Date().getFullYear().toString();
      var year=data[this.i].date.toString();
      var subyear=year.substring(6,12);
      //console.log(todayyear);
     if(todayyear==subyear)
     {
          this.fundarr.push(data[this.i]);


     }
        }
        if(this.fundarr.length<=0)
          {
            this.msg="No Records!";
            console.log(this.msg);
          }

      }




    );

}
onclickfund()
{

}
}
