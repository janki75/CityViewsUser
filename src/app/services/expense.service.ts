import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expense_url:string="http://localhost:8081/adminportal/expense/";
  constructor(private http:HttpClient) { }

  getallexpense()
  {
    return this.http.get(this.expense_url);
  }
}
