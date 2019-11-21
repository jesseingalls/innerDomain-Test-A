import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-e-shop',
  templateUrl: './e-shop.component.html',
  styleUrls: ['./e-shop.component.scss']
})
export class EShopComponent implements OnInit {
  teacher: boolean = false;
  retreat: boolean = false;
  services: boolean = false;
  products: boolean = true;
  constructor(
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

  }
  showTeacher() {
    this.teacher = !this.teacher;
    this.retreat = false;
    this.products = false;
    this.services = false;
  }
  showRetreat() {
    this.retreat = !this.retreat;
    this.teacher = false;
    this.services = false;
    this.products = false;
  }
  showServices() {
    this.services = !this.services;
    this.teacher = false;
    this.retreat = false;
    this.products = false;
  }
  showAllProducts() {
    this.products = true;
    this.teacher = false;
    this.retreat = false;
    this.services = false;
  }
  showMessage(position: any = 'top-left') {
    this.toastr.info('Feature Coming Soon!');
  }
}
