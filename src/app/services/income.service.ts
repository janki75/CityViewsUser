import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  income_url:string="http://localhost:8081/adminportal/income/";
  constructor(private http:HttpClient) { }

  getallincome()
  {
    return this.http.get(this.income_url);
  }
}
