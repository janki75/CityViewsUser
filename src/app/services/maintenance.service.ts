import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  maintenance_url:string="http://localhost:8081/adminportal/maintenance/fetchbyflat/";
  constructor(private _http:HttpClient) { }

  getmaintenancebyflatid(id)
  {
    return this._http.get(this.maintenance_url+id);
  }
}
