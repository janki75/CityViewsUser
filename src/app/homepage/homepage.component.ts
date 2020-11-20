import { Component, OnInit } from '@angular/core';
import { meeting_class } from '../classes/meeting';
import { MeetingService } from '../services/meeting.service';
import { OwnerService } from '../services/owner.service';
import { owner_class } from '../classes/owner';
import { expense_class } from '../classes/expense';
import { ExpenseService } from '../services/expense.service';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
arr:meeting_class[]=[];
ownerarr:owner_class[]=[];
expensearr:expense_class[]=[];
msg:string;
i:number;
count:number=0;
sum:number=0;
incomesum:number=0;
newdt:string[]=[];
  constructor(private meetingser:MeetingService,private ownerser:OwnerService,private expenseser:ExpenseService,private incomeser:IncomeService) { }
public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      '../../assets/images/d1.jpg',
      '../../assets/images/d2.jpg',
      '../../assets/images/d3.jpg',
      '../../assets/images/d4.jpg',
      '../../assets/images/d5.jpg',
      '../../assets/images/d6.jpg',
      '../../assets/images/d7.jpeg'

      ];

         this.meetingser.getUpcomingMeeting().subscribe(
           (data:any)=>
           {
             if(data.length>0)
             {
              this.arr=data;
             }
             else{
                     this.msg="No Upcoming Meetings!"
                     console.log(this.msg);
             }

           }
         );

         //ownerdetails

         this.ownerser.getallowner().subscribe(
           (data:owner_class[])=>{
              console.log(data);
            for(this.i=0;this.i<data.length;this.i++)
            {

              if(data[this.i].active)
              {
                this.count++;
              }

            }


           }
         );

         //expense
         this.expenseser.getallexpense().subscribe(
           (data:any)=>{
            var todaydt=new Date().toString();
            console.log(todaydt.substring(11,15));

            for(this.i=0;this.i<data.length;this.i++)
            {
               console.log(data[this.i].date.toString().substring(6,10));
               if(todaydt.substring(11,15)==data[this.i].date.toString().substring(6,10))
                     this.sum+=data[this.i].amount;
            }
            console.log(this.sum);

           }
         );
         //income

         this.incomeser.getallincome().subscribe(
           (data:any)=>{
            var todaydt=new Date().toString();
            console.log(todaydt.substring(11,15));

            for(this.i=0;this.i<data.length;this.i++)
            {
               console.log(data[this.i].date.toString().substring(6,10));
               if(todaydt.substring(11,15)==data[this.i].date.toString().substring(6,10))
                     this.incomesum+=data[this.i].amount;
            }
            console.log(this.incomesum);

           }
         );


  }

}
