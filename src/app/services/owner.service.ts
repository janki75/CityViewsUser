import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { owner_class } from "../classes/owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owner_url:string="http://localhost:8081/adminportal/owner/";
  ownerbyemail_url:string="http://localhost:8081/adminportal/owner/byemail/"
  constructor(private _http:HttpClient) { }

  getallowner()
  {
    return this._http.get(this.owner_url);
  }
  getownerByemail(email)
  {
   return this._http.get(this.ownerbyemail_url+email);
  }
  getownerById(id)
  {
   return this._http.get(this.owner_url+id);
  }
  updateownerdetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.owner_url+data.ownerId,body,{headers:head1});
  }
}
