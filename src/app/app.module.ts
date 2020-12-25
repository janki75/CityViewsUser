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
  MatFormFieldModule,
 MatSelectModule,


  } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';
import { LoginComponent } from './views/login/login.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { ManageprofileComponent } from './views/manageprofile/manageprofile.component';
import { MyflatComponent } from './views/myflat/myflat.component';
import { FlatdetailComponent } from './views/flatdetail/flatdetail.component';
import { ShowmaintenancedetailComponent } from './views/showmaintenancedetail/showmaintenancedetail.component';
import { ShowunpaidmaintenanceComponent } from './views/showunpaidmaintenance/showunpaidmaintenance.component';
import { PaidunpaidmaintenanceComponent } from './views/paidunpaidmaintenance/paidunpaidmaintenance.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ComplaintComponent,
    HeaderComponent,
    FooterComponent,
    EditComplaintComponent,
    MycomplaintComponent,
    ElectionComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    ViewprofileComponent,
    ManageprofileComponent,
    MyflatComponent,
    FlatdetailComponent,
    ShowmaintenancedetailComponent,
    ShowunpaidmaintenanceComponent,
    PaidunpaidmaintenanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,

  MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
