import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  allEvents() {
    return this._http.get('/api/events');
  }
  addEvents(event) {
    return this._http.post('/api/events', event);
  }
  deleteEvent(id) {
    return this._http.delete('/api/events/' + id);
  }
  allUsers() {
    return this._http.get('/api/users');
  }
  addUser(user) {
    console.log('creating');
    return this._http.post('/api/users', user);
  }
  deleteUser(id) {
    return this._http.delete('/api/users/' + id);
  }
  allYogaClasses() {
    return this._http.get('/api/yogaclasses');
  }
  addYogaClass(yogaclass) {
    console.log('creating');
    return this._http.post('/api/yogaclasses', yogaclass);
  }
  deleteYogaClass(id) {
    return this._http.delete('/api/yogaclasses/' + id);
  }
  allTeacherTrainings() {
    return this._http.get('/api/teachertrainings');
  }
  addTeacherTraining(teacherTraining) {
    console.log('creating');
    return this._http.post('/api/teachertrainings', teacherTraining);
  }
  deleteTeacherTraining(id) {
    return this._http.delete('/api/teachertrainings/' + id);
  }
}
