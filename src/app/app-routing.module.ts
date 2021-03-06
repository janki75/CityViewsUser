import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';
import { VotingComponent } from './views/voting/voting.component';
import { MyflatComponent } from './views/myflat/myflat.component';
import { FlatdetailComponent } from './views/flatdetail/flatdetail.component';
import { ShowmaintenancedetailComponent } from './views/showmaintenancedetail/showmaintenancedetail.component';
import { ShowunpaidmaintenanceComponent } from './views/showunpaidmaintenance/showunpaidmaintenance.component';
import { PaidunpaidmaintenanceComponent } from './views/paidunpaidmaintenance/paidunpaidmaintenance.component';
import { LoginComponent } from './views/login/login.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { ManageprofileComponent } from './views/manageprofile/manageprofile.component';
import { UserAuthService } from './services/user-auth.service';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { FundsComponent } from './views/funds/funds.component';
import { VacantflatComponent } from './views/vacantflat/vacantflat.component';
import { VacantflatdetailComponent } from './views/vacantflatdetail/vacantflatdetail.component';

const routes: Routes = [
  //home and login
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',
    component:HomepageComponent,
    canActivate:[UserAuthService]
  },
  //complaint routes
  {path:'complaint',component:ComplaintComponent,canActivate:[UserAuthService]},
  {
    path:'editcomplaint/:id',component:EditComplaintComponent,canActivate:[UserAuthService]
  },
  {
    path:'mycomplaint',component:MycomplaintComponent,canActivate:[UserAuthService]
  },
  //fund
  {
    path:'fund/:id',component:FundsComponent,canActivate:[UserAuthService]
  },
  //election routes
  {
    path:'elections',component:ElectionComponent,canActivate:[UserAuthService]
  },
  {
    path:'voting',component:VotingComponent

  },
  //flat routes
  {
    path:'myflat',component:MyflatComponent,canActivate:[UserAuthService]
  },
  {
    path:'flatdetail/:id',
    component:FlatdetailComponent,
    canActivate:[UserAuthService]
  },
  {
    path:'vacantflat',
    component:VacantflatComponent,
    canActivate:[UserAuthService]
  },
  {
    path:'vacantflatdetail/:id',
    component:VacantflatdetailComponent,
    canActivate:[UserAuthService]
  },
  //profile
  {
    path:'viewprofile',component:ViewprofileComponent
  },
  {
    path:'viewprofile/manageprofile/:id',component:ManageprofileComponent
  },

  {
    path:'viewprofile/changepassword/:id',component:ChangepasswordComponent,canActivate:[UserAuthService]
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  },
  //maintenance
  {
    path:'paidunpaid/:id',component:PaidunpaidmaintenanceComponent,canActivate:[UserAuthService]
  },
  {
    path:'showmaintenance/:id',component:ShowmaintenancedetailComponent,canActivate:[UserAuthService]
  },
  {
    path:'showunpaidmaintenance/:id',component:ShowunpaidmaintenanceComponent,canActivate:[UserAuthService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
