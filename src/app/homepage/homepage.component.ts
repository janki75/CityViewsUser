import { Component, OnInit } from '@angular/core';
import { meeting_class } from '../classes/meeting';
import { MeetingService } from '../services/meeting.service';
import { OwnerService } from '../services/owner.service';
import { owner_class } from '../classes/owner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
arr:meeting_class[]=[];
ownerarr:owner_class[]=[];
msg:string;
i:number;
count:number=0;
  constructor(private meetingser:MeetingService,private ownerser:OwnerService) { }
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
  }

}
