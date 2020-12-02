import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';
import { MyflatComponent } from './views/myflat/myflat.component';
import { FlatdetailComponent } from './views/flatdetail/flatdetail.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {path:'complaint',component:ComplaintComponent},
  {
    path:'editcomplaint/:id',component:EditComplaintComponent
  },
  {
    path:'mycomplaint',component:MycomplaintComponent
  },
  {
    path:'elections',component:ElectionComponent
  },
  {
    path:'myflat',component:MyflatComponent
  },
  {
    path:'flatdetail/:id',
    component:FlatdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
