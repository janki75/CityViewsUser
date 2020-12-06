import { element } from 'protractor';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { election_class } from 'src/app/classes/elections';
import { electionposition_class } from 'src/app/classes/electionposition';
import { election_result } from 'src/app/classes/election_result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  vote_count:number=0;
  flag:boolean=false;
  dt:Date;
  msg:string="";
  resultflag:boolean=true;
  // winner:boolean=false;
  election_id:number;
  position_id:number;
  i:number=0;
  owner_id:number=2; //localStorage.getItem('ownerId'); //change this after login is added.temporary it is static
  constructor(private route:Router,private _eleserv:ElectionService) { }
  arrelection:any[]=[];
  arrelectionpos:electionposition_class[]=[];
  date : any;
  eleDate : any;
  todaydt : any;
  year:any;
  finaltodaydt:any;
  msg1:string ="";
  j:number=0;
  max:number=0;
  arrwinner:any[]=[];
  ownerName:string="";
  disableflag:boolean=false;
  maxcountofpos:number=2;
  cnt:number=0;
  ngOnInit() {


    this._eleserv.getAllElections().subscribe(
    (data:any)=>{
      if(data.length==0)
      {
        this.msg1="No Elections Found!!"
      }
      console.log(data);
      this.todaydt=new Date();
      var day = this.todaydt.getDate();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear();
    this.finaltodaydt=day+"/"+month+"/"+this.year;
   
   
      for(this.i=0;this.i<data.length;this.i++)
      {
        if(data[this.i].active)
        {
          let sDate = data[this.i].date.substring(0,2);
          let sMonth =data[this.i].date.substring(3,5);
          let sYear = data[this.i].date.substring(6,10);
          let eDate = data[this.i].endDate.substring(0,2);
          let eMonth =data[this.i].endDate.substring(3,5);
          let eYear = data[this.i].endDate.substring(6,10);
            if(eYear==this.year)
            {

              if(eMonth>month)
              {
                this.resultflag=false;
              }
              else if(eMonth<month)
              {
                this.resultflag=true;
              }
              else
              {
                if(eDate<day)
                {
                  this.resultflag=true;
                }
                else
                {
                  this.resultflag=false;
                }
              }
            }
            else
            {
              this.resultflag=true;
            }
           const da={
            
               election_id:data[this.i].id,
               active:data[this.i].active,
               date:data[this.i].date,
               election_name:data[this.i].electionName,
               endDate:data[this.i].endDate,
            resultflag:this.resultflag,
      
          }
               this.arrelection.push(da);
               
        }

      }
    }
    );
    this._eleserv.getAllElectionPosition().subscribe(
      (data:electionposition_class[])=>{
        this.arrelectionpos=data;
        console.log(data);
        
      }
    );
  }
  onclick(id:number)
  {
    this.election_id=id;
  }
  onsave()
  {

  this._eleserv.getelectionresult(this.election_id).subscribe(
    (data:any)=>{
      for(this.i=0;this.i<data.length;this.i++)
      {
        if(data[this.i].ownerId==this.owner_id)
        {
          this.flag=true;
          break;
        }
      }
      if(this.flag)
      {
        this.msg="Sorry You already have applied for the election!!";
      }
      else
      {
        this.cnt=0;
        this._eleserv.getelectionresult(this.election_id).subscribe(
          (data:any)=>{
            for(this.i=0;this.i<data.length;this.i++)
            {
              if(data[this.i].positionId==this.position_id)
              {
                this.cnt++
              }
            }
            if(this.cnt>=this.maxcountofpos)
            {
              this.msg="Sorry,Application for this position is full!!";
            }
            else
            {
              const data={
                ownerId:this.owner_id,
                positionId:this.position_id,
                electionId:this.election_id,
                voteCount:this.vote_count,
              }
              console.log(data);
              this._eleserv.addElectionResult(data).subscribe(
                // new election_result(this.election_result_id,this.vote_count,this.winner,this.election_id,this.position_id,this.owner_id)
                 (data:any)=>{
                   console.log(data);
                 }
               );
               this.msg="You have successfully applied in the election!!";
            }

          }
        );
      }
    }
  );
   
  }
  onclose()
  {
    this.msg="";
  }
  onclickresult(election_id)
  {
    this.arrwinner.splice(0,this.arrwinner.length);
    this.election_id=election_id;
    this._eleserv.getelectionresult(this.election_id).subscribe(
      (data:any)=>{
        console.log(data);
        
        for(this.i=0;this.i<this.arrelectionpos.length;this.i++)
        {
          this.max=0;
          this.ownerName="";
          console.log(this.arrelectionpos[this.i].name);
          for(this.j=0;this.j<data.length;this.j++)
          {
            if(data[this.j].positionName==this.arrelectionpos[this.i].name)
            {
              if(data[this.j].voteCount>this.max)
              {
                this.max=data[this.j].voteCount;
                this.ownerName=data[this.j].ownerName;
              }
            }
          }
          const temp={
            posName:this.arrelectionpos[this.i].name,
            vote:this.max,
            ownerName:this.ownerName
          }
          this.arrwinner.push(temp);
        }

      }
    );

  }

}
