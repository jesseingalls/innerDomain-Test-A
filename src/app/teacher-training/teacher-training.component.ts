import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-teacher-training',
  templateUrl: './teacher-training.component.html',
  styleUrls: ['./teacher-training.component.scss']
})
export class TeacherTrainingComponent implements OnInit {
  allTeacherTrainings: any = [];
  constructor(
    private _http: HttpService,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getTeacherTrainings();
  }
  getTeacherTrainings()  {
    this._http.allTeacherTrainings()
    .subscribe((response: any) => {
      console.log('this completed');
      console.log(response);
      this.allTeacherTrainings = response;
  });
  }
  addToCart() {
    this.toastr.success('Item Added to Cart!');
  }
}
