import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';
import { MyflatComponent } from './views/myflat/myflat.component';
import { FlatdetailComponent } from './views/flatdetail/flatdetail.component';
import { LoginComponent } from './views/login/login.component';
import { UserAuthService } from './services/user-auth.service';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';

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
    path:'flatdetail/:id',
    component:FlatdetailComponent,canActivate:[UserAuthService]
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
