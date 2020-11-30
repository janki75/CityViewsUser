import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onlogin()
  {
    this._route.navigate(['']);
  }
  onforget()
  {
    this._route.navigate(['/forget']);
  }


}
