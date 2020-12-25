import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionListChange,MatListOption } from '@angular/material/list';
import { VotingService } from '../../services/voting.service';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  candName:any;
shoes:any;
result:any[]=[];
pos:any[]=[];
i:number;
eleResDetail:any[] = [];
max:number = 0;
winner:string="";
j:number=1;
eleDetail:any[]=[];
eleResult:any[]=[];
electionId:number[]=[];
eleId:number;
status2:any=false;
cnt:number=0;
cntErr:any[]=[];
ownerEmail:any="";
ownerId:any;
owners:any[] = [];
electionResults:any[] = []; 
ownerResults:any[] = []; 
m:number=0;
err:any="";
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(private vote : VotingService,private owner : OwnerService) { }

  ngOnInit() {
    
    this.ownerEmail = "h@gmail.com";
    this.owner.getOwnerIdByEmail(this.ownerEmail)
    .subscribe((res:any) => {
      this.ownerId = res.id;
    })



      this.vote.getPosition()
      .subscribe((res:any)=>{
        this.result = res;
        for(this.i = 0;this.i<this.result.length;this.i++){
              if(this.result[this.i].active == true){
                const data1 = {id:this.result[this.i].id,pos:this.result[this.i].name}
                this.pos.push(data1);
              }
        }
      })

      this.vote.getallelectionresult()
      .subscribe((res:any) => {
        this.electionResults = res;
        let currdate = new Date();
        let currday = currdate.getDate();
        let currmonth = currdate.getMonth()+1;
        let curryear = currdate.getFullYear();
     
          for(this.i =0;this.i<this.electionResults.length;this.i++){

          }
        this.owner.getallowner()
        .subscribe((res:any) => {
          this.owners = res;

          for(this.i=0;this.i<this.owners.length;this.i++){
            for(this.m=0;this.m<this.electionResults.length;this.m++){
                //if(this.owners[this.i].name == )
            }
          }
        })
      })


      this.vote.getallelectionresult()
    .subscribe((res:any)=>{
      this.eleResult = res;
      let date = new Date();
      let currday = date.getDate();
      let currmonth = date.getMonth()+1;
      let curryear = date.getFullYear();
      for(this.i =0;this.i<this.eleResult.length;this.i++){
       let eleDate = this.eleResult[this.i].electionDate;
       let day = eleDate.substring(0,2);
       let month = eleDate.substring(3,5);
       let year = eleDate.substring(6,10);
       let endDate = this.eleResult[this.i].electionEndDate;
       let endday = endDate.substring(0,2);
       let endmonth = endDate.substring(3,5);
       let endyear = endDate.substring(6,10);

       
       if(currday == day && currmonth == month && curryear == year){
          this.electionId = this.eleResult[this.i].electionId;
          this.vote.getelectionresult(this.electionId)
         .subscribe((res:any) => {
           this.eleDetail = res;
           for(this.j =0;this.j<this.eleDetail.length;this.j++){
            
              if(this.eleDetail[this.j].email == "h@gmail.com"){
                    const data = {email:this.eleDetail[this.j].email}
                    this.cntErr.push(data);             
                    break;
               }
             }  
         })
       }
       else if(currday > day && currmonth == month && curryear == year){
        if(currday <= endday && currmonth == endmonth && curryear == endyear){
        this.electionId = this.eleResult[this.i].electionId;
        this.vote.getelectionresult(this.electionId)
       .subscribe((res:any) => {
         this.eleDetail = res;
         for(this.j =0;this.j<this.eleDetail.length;this.j++){
          
            if(this.eleDetail[this.j].email == "h@gmail.com"){
                  const data = {email:this.eleDetail[this.j].email}
                  this.cntErr.push(data);       
                  break;
             }
           }  
       })
      }
      else{
        this.err = "Currently , no election is going on!!!";
      }
    }
     }
    });
      
  }
  selection(value){
    this.vote.getelectionresultbyid(value)
    .subscribe((res:any) => {
      this.candName = res.ownerName;
        const data = {
          electionResultId : res.electionResultId,
          memberId : this.ownerId
        }
      
      this.vote.addVotingDetails(data)
      .subscribe((res) => {

      })

      this.vote.updatestatus(res.electionResultId)
      .subscribe((res) => {
        
      })
    })
  }

  getData(data){
    //console.log(data);
    /*if(data.pos == "Chairman"){
        this.status2 = true;
    }
    else{
      this.status2 = false;
    }*/

    this.vote.getVotingDetails(this.ownerId)
    .subscribe((res) => {
      console.log(res);
    })

    this.vote.getallelectionresult()
    .subscribe((res:any)=>{
      this.eleResult = res;
      let date = new Date();
      let currday = date.getDate();
      let currmonth = date.getMonth()+1;
      let curryear = date.getFullYear();
      for(this.i =0;this.i<this.eleResult.length;this.i++){
       let eleDate = this.eleResult[this.i].electionDate;
       let day = eleDate.substring(0,2);
       let month = eleDate.substring(3,5);
       let year = eleDate.substring(6,10);

       let endDate = this.eleResult[this.i].electionEndDate;
       let endday = endDate.substring(0,2);
       let endmonth = endDate.substring(3,5);
       let endyear = endDate.substring(6,10);

       if(currday == day && currmonth == month && curryear == year){
          this.electionId = this.eleResult[this.i].electionId;
          this.vote.getelectionresult(this.electionId)
         .subscribe((res:any) => {
           this.eleDetail = res;
           for(this.j =0;this.j<this.eleDetail.length;this.j++){
             let eleDate = this.eleDetail[this.j].electionDate;
             let day = eleDate.substring(0,2);
             let month = eleDate.substring(3,5);
             let year = eleDate.substring(6,10);
            
               if(this.eleDetail[this.j].positionName == data.pos){
                   const data1 = {electionResultId:this.eleDetail[this.j].electionResultId,ownername:this.eleDetail[this.j].ownerName,email:this.eleDetail[this.j].email,checked:false}                
                   this.eleResDetail.push(data1);
               }
             } 
         })
          this.eleResDetail.splice(0,this.eleResDetail.length);     
          this.candName = '';
       }

       else if(currday > day && currmonth == month && curryear == year){
        if(currday <= endday && currmonth == endmonth && curryear == endyear){
          this.electionId = this.eleResult[this.i].electionId;
          this.vote.getelectionresult(this.electionId)
         .subscribe((res:any) => {
           this.eleDetail = res;
           for(this.j =0;this.j<this.eleDetail.length;this.j++){
               if(this.eleDetail[this.j].positionName == data.pos){
                   const data1 = {electionResultId:this.eleDetail[this.j].electionResultId,ownername:this.eleDetail[this.j].ownerName,email:this.eleDetail[this.j].email,checked:false}                
                   this.eleResDetail.push(data1);
               }
             } 
         })
          this.eleResDetail.splice(0,this.eleResDetail.length);     
          this.candName = '';
        }
     }
       break;
     }
    });
    
     
   }

}
