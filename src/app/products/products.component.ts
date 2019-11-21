import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
