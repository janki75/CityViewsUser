import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  flat_url:string="http://localhost:8081/adminportal/flats/vacant/";
  flatbyowner_url:string="http://localhost:8081/adminportal/flats/fetchbyowner/";
  getbyid_url:string="http://localhost:8081/adminportal/flats/fetch/";
  constructor(private http:HttpClient) { }

  getallvacantflats()
  {
    return this.http.get(this.flat_url);
  }
  getFlatsByOwnerId(id:number)
  {
    return this.http.get(this.flatbyowner_url+id);
  }
  getFlatById(id:number)
  {
    return this.http.get(this.getbyid_url+id);
  }
}
