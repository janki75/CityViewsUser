import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  election_url:string="http://localhost:8081/adminportal/election/";
  electionResult_url:string="http://localhost:8081/adminportal/electionResult/";
  electionPos_url:string="http://localhost:8081/adminportal/electionPosition/";
  electionVote_url:string="http://localhost:8081/adminportal/electionVoteRecord/vote/";
  owner_url:string="http://localhost:8081/adminportal/owner/";
  constructor(private _http:HttpClient) { }
  getallelection()
  {
   return this._http.get(this.election_url);
  }

  addVotingDetails(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.electionVote_url,body,{headers:head1});
  }

  updateElectionName(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.election_url+item.electionId,body,{headers:head1});
  }

  addElectionDetail(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.election_url,body,{headers:head1});
  }

  getelectionresult(data)
  {
    return this._http.get(this.electionResult_url+"fetchbyelection/"+data);
  }

  updatestatus(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.electionResult_url+data+"/upvote/",{headers:head1});
  }

  getPosition(){
    return this._http.get(this.electionPos_url);    
  }

  getallelectionresult(){
    return this._http.get(this.electionResult_url);    
  }
  getIdByOwnerName(data){
    return this._http.get(this.owner_url+"byemail/"+data);
  }

  getelectionresultbyid(data)
  {
    return this._http.get(this.electionResult_url+"fetch/"+data);
  }

  getVotingDetails(data){
    
    return this._http.get(this.electionVote_url+data);    
  }
}
