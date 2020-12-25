import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owner_url:string="http://localhost:8081/adminportal/owner/";
  constructor(private http:HttpClient) { }

  getallowner()
  {
    return this.http.get(this.owner_url);
  }

  getOwnerIdByEmail(email){
    return this.http.get(this.owner_url+"byemail/"+email);
  }
}
