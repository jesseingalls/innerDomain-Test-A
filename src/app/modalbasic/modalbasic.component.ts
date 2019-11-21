import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modalbasic',
  templateUrl: './modalbasic.component.html',
  styleUrls: ['./modalbasic.component.scss']
})
export class ModalbasicComponent implements OnInit {
  errors: any = [];
  user = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  };
  closeResult: string;
  constructor(
    private modalService: NgbModal,
    private _http: HttpService,
    private _router: Router,
    private toastr: ToastrService
    ) { }
    ngOnInit() {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        comment: ''
      };
    }
    handleSubmit() {
//       this.errors = [];
//       this._http.addUser(this.user).subscribe(data => {
//         if (data['errors']) {
//           console.log(data['errors'])
//           for (var key in data['errors']) {
//             this.errors.push(data['errors'][key]['message']);
//           }
//           console.log(this.errors);
//           console.log(data);
//         } else {
//           this.user = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             comment: ''
//           };
          this.modalService.dismissAll();
          this.toastr.success('Success!');

          // this._router.navigate(['/innerDomain']);
//         }
//       });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
