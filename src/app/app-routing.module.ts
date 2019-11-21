import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { RetreatsComponent } from './retreats/retreats.component';
import { EShopComponent } from './e-shop/e-shop.component';


const routes: Routes = [
  {path: '',  redirectTo: '/innerDomain', pathMatch: 'full'},
  {path: 'innerDomain', component: HomeComponent},
  {path: 'innerDomain/about', component: AboutComponent},
  {path: 'innerDomain/class-schedule', component: ClassScheduleComponent},
  {path: 'innerDomain/retreats', component: RetreatsComponent},
  {path: 'innerDomain/e-shop', component: EShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
