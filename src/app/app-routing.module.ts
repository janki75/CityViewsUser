import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';
import { MyflatComponent } from './views/myflat/myflat.component';
import { FlatdetailComponent } from './views/flatdetail/flatdetail.component';
<<<<<<< HEAD
import { ShowmaintenancedetailComponent } from './views/showmaintenancedetail/showmaintenancedetail.component';
import { ShowunpaidmaintenanceComponent } from './views/showunpaidmaintenance/showunpaidmaintenance.component';
import { PaidunpaidmaintenanceComponent } from './views/paidunpaidmaintenance/paidunpaidmaintenance.component';
=======
import { LoginComponent } from './views/login/login.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { ManageprofileComponent } from './views/manageprofile/manageprofile.component';
import { UserAuthService } from './services/user-auth.service';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
>>>>>>> bc4571a038300ced23defd7f0cbef0cb0d5b9bc3

const routes: Routes = [
  {
    path:'',component:LoginComponent  
  },
  {
    path:'home',
    component:HomepageComponent,
    canActivate:[UserAuthService]
  },
  {path:'complaint',component:ComplaintComponent,canActivate:[UserAuthService]},
  {
    path:'editcomplaint/:id',component:EditComplaintComponent,canActivate:[UserAuthService]
  },
  {
    path:'mycomplaint',component:MycomplaintComponent,canActivate:[UserAuthService]
  },
  {
    path:'elections',component:ElectionComponent,canActivate:[UserAuthService]
  },
  {
    path:'myflat',component:MyflatComponent,canActivate:[UserAuthService]
  },
  {
    path:'mycomplaint',component:MycomplaintComponent
  },
  {
    path:'viewprofile',component:ViewprofileComponent
  },
  {
    path:'viewprofile/manageprofile/:id',component:ManageprofileComponent
  },
  {
    path:'viewprofile/changepassword/:id',component:ChangepasswordComponent
  },
  {
    path:'flatdetail/:id',
<<<<<<< HEAD
    component:FlatdetailComponent
  },
  {path:'paidunpaid/:id',component:PaidunpaidmaintenanceComponent},
  {path:'showmaintenance/:id',component:ShowmaintenancedetailComponent},
  {path:'showunpaidmaintenance/:id',component:ShowunpaidmaintenanceComponent}
=======
    component:FlatdetailComponent,canActivate:[UserAuthService]
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  }
>>>>>>> bc4571a038300ced23defd7f0cbef0cb0d5b9bc3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
