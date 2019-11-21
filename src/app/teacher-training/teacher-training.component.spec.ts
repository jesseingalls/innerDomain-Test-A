import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTrainingComponent } from './teacher-training.component';

describe('TeacherTrainingComponent', () => {
  let component: TeacherTrainingComponent;
  let fixture: ComponentFixture<TeacherTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
