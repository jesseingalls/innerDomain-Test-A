import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  allYogaClasses: any = [];
  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllClasses();
  }
  getAllClasses() {
    this._http.allYogaClasses()
    .subscribe((response: any) => {
      console.log('this completed');
      console.log(response);
    this.allYogaClasses = response;
  });
  }
}
