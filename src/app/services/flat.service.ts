import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  flat_url:string="http://localhost:8081/adminportal/flats/vacant/";
  constructor(private http:HttpClient) { }

  getallvacantflats()
  {
    return this.http.get(this.flat_url);
  }
}
