import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { election_result } from '../classes/election_result';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  election_url:string='http://localhost:8081/adminportal/election/';
  electionposition_url:string="http://localhost:8081/adminportal/electionPosition/";
  election_res_url:string="http://localhost:8081/adminportal/electionResult/";
  constructor(private _http:HttpClient) { }
  getAllElections()
  {
   return this._http.get(this.election_url);
  }
  getAllElectionPosition()
  {
    return this._http.get(this.electionposition_url);
  }
  addElectionResult(item:any)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.election_res_url,body,{headers:head1});
  }
  getelectionresult(id:number)
  {
    return this._http.get(this.election_res_url+"fetchbyelection/"+id);
  }

}
