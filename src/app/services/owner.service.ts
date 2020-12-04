import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owner_url:string="http://localhost:8081/adminportal/owner/";
  login_url:string="http://localhost:8081/adminportal/owner/login/";
  constructor(private http:HttpClient) { }

  getallowner()
  {
    return this.http.get(this.owner_url);
  }
  login(item:login)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.login_url,body,{headers:head1});
  }
}
