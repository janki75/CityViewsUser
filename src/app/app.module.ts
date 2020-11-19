import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
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
import { EditComplaintComponent } from './view/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ComplaintComponent,
    HeaderComponent,
    FooterComponent,
    EditComplaintComponent,
    MycomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    SliderModule

=======
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  
  MatIconModule,
  
 
>>>>>>> 41cc115187d3e6167d25d55526ea29f350d86889
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
