import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpriceComponent } from './mainprice.component';

describe('MainpriceComponent', () => {
  let component: MainpriceComponent;
  let fixture: ComponentFixture<MainpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
