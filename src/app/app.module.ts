import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalbasicComponent } from './modalbasic/modalbasic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RetreatsComponent } from './retreats/retreats.component';
import { EShopComponent } from './e-shop/e-shop.component';
import { SidebarModule } from 'ng-sidebar';
import { TeacherTrainingComponent } from './teacher-training/teacher-training.component';
import { RetreatShopComponent } from './retreat-shop/retreat-shop.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ModalbasicComponent,
    MainFooterComponent,
    ClassScheduleComponent,
    ScheduleComponent,
    RetreatsComponent,
    EShopComponent,
    TeacherTrainingComponent,
    RetreatShopComponent,
    ServicesComponent,
    ProductsComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
