import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  addToCart() {
    this.toastr.success('Item Added to Cart!');
  }
}
