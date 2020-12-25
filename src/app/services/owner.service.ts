import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { owner_class } from "../classes/owner";
import { login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owner_url:string="http://localhost:8081/adminportal/owner/";
  ownerbyemail_url:string="http://localhost:8081/adminportal/owner/byemail/"
  login_url:string="http://localhost:8081/adminportal/owner/login/";
  forgetpass_url:string="http://localhost:8081/adminportal/password/recovery/";
  email_url:string="http://localhost:8081/adminportal/owner/byemail/";
  constructor(private http:HttpClient) { }

  getallowner()
  {
    return this.http.get(this.owner_url);
  }

  getOwnerIdByEmail(email){
    return this.http.get(this.owner_url+"byemail/"+email);
  }
  getownerByemail(email)
  {
   return this.http.get(this.ownerbyemail_url+email);
  }
  getownerById(id)
  {
   return this.http.get(this.owner_url+id);
  }
  updateownerdetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.owner_url+data.ownerId,body,{headers:head1});
  }
  login(item:login)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.login_url,body,{headers:head1});
  }
  forgetpassword(id:number)
  {
    return this.http.get(this.forgetpass_url+id);
  }
  getOwnerByEmail(email:string)
  {
    return this.http.get(this.email_url+email);
  }
}
