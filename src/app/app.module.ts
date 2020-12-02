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
import { VotingComponent } from './views/voting/voting.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

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
    VotingComponent,

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
    MatExpansionModule,
    MatDatepickerModule, 
    MatNativeDateModule,
  MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
