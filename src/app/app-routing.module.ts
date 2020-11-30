import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './view/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';
import { ElectionComponent } from './views/election/election.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
