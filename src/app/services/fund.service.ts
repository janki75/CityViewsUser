import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundService {
fund_url:string="http://localhost:8081/adminportal/funds/fetchByOwner/"
  constructor(private http:HttpClient) { }
  getfundbyid(id:number)
  {
    return this.http.get(this.fund_url+id);
  }
}
