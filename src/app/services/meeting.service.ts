import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  upcomingmeeting_url:string="http://localhost:8081/adminportal/meeting/upcoming/";
  constructor(private _http:HttpClient) { }

  getUpcomingMeeting()
  {
   return this._http.get(this.upcomingmeeting_url);
  }
}
