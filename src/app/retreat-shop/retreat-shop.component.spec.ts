import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreatShopComponent } from './retreat-shop.component';

describe('RetreatShopComponent', () => {
  let component: RetreatShopComponent;
  let fixture: ComponentFixture<RetreatShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreatShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreatShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
