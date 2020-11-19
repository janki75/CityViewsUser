import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { complaint_Class } from '../classes/complaint';
import { Subject,observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  complaint_url:string="http://localhost:8081/adminportal/complaints/";

  constructor(private _http:HttpClient) { }

  getAllComplaints()
  {
    return this._http.get(this.complaint_url);
  }
  addComplaint(item:complaint_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.complaint_url,body,{headers:head1});
  }
  updateUpvote(item:complaint_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.complaint_url+item.id+"/upvote/",body,{headers:head1});
  }
  updateDownVote(item:complaint_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.complaint_url+item.id+"/downvote/",body,{headers:head1});
  }
  getComplaintById(id:number)
  {
    return this._http.get(this.complaint_url+id);
  }
  updateComplaint(item:complaint_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.complaint_url+item.id,body,{headers:head1});
  }

}
