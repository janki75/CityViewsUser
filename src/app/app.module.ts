import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule

  } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { LoginComponent } from './views/login/login.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { ManageprofileComponent } from './views/manageprofile/manageprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ComplaintComponent,
    HeaderComponent,
    FooterComponent,
    EditComplaintComponent,
    MycomplaintComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    ViewprofileComponent,
    ManageprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,

    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,

  MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
