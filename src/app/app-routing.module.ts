import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditComplaintComponent } from './views/edit-complaint/edit-complaint.component';
import { MycomplaintComponent } from './views/mycomplaint/mycomplaint.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'complaint',component:ComplaintComponent},
  {
    path:'editcomplaint/:id',component:EditComplaintComponent
  },
  {
    path:'mycomplaint',component:MycomplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
