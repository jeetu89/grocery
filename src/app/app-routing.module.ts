import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'events',component:EventsComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
