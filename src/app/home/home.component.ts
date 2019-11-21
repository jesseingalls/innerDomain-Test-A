import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

function showMessage() {
  document.getElementById('newMessage').style.display = 'block';
}
function hideMessage() {
  document.getElementById('newMessage').style.display = 'none';

}
function showMessage2() {
  document.getElementById('newMessage2').style.display = 'block';
}
function hideMessage2() {
  document.getElementById('newMessage2').style.display = 'none';
}
function showMessage3() {
  document.getElementById('newMessage3').style.display = 'block';
}
function hideMessage3() {
  document.getElementById('newMessage3').style.display = 'none';
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allEvents: any;
  timerId: any;
  constructor(
    private _http: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents()  {
    this._http.allEvents()
    .subscribe((response: any) => {
      console.log('this completed');
      console.log(response);
    this.allEvents = response;
  });
  }
  showText() {
    this.timerId = setTimeout(showMessage, 2000);
    console.log('showing');
  }

  hideText() {
    hideMessage();
    clearTimeout(this.timerId);
    console.log('timeout');
  }
  showText2() {
    this.timerId = setTimeout(showMessage2, 2000);
    console.log('showing');
  }

  hideText2() {
    hideMessage2();
    clearTimeout(this.timerId);
    console.log('timeout');
  }
  showText3() {
    this.timerId = setTimeout(showMessage3, 2000);
    console.log('showing');
  }

  hideText3() {
    hideMessage3();
    clearTimeout(this.timerId);
    console.log('timeout');
  }
}
