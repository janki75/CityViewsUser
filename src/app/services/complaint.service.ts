import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
}
