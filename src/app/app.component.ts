import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



// function hello() {
//   alert('welcome to innerDomain');
// }

function changeColor() {
  document.getElementById('logoBox').style.backgroundColor = 'red';
}
function changeBack() {
  document.getElementById('logoBox').style.backgroundColor = 'white';
}
function showMessage() {
  document.getElementById('message').style.display = 'block';
}
function hideMessage() {
  document.getElementById('message').style.display = 'none';

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timerId: any;
  showModal: boolean = false; /*possible use for hiding or show div*/
  ngOnInit(): void {

  }
  fireColor() {
    changeColor();
  }
  colorBack() {
    changeBack();
  }
  showText() {
    this.timerId = setTimeout(showMessage, 1500);
    console.log('showing');
  }

  hideText() {
    hideMessage();
    clearTimeout(this.timerId);
    console.log('timeout');
  }
  showForm() {
    this.showModal = true;
    console.log('showformbutton');
  }
  constructor(
    private _router: Router
  ) { }
  title = 'innerDomainPrototype';

}
