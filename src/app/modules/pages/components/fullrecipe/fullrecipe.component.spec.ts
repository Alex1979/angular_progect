import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullrecipeComponent } from './fullrecipe.component';

describe('FullrecipeComponent', () => {
  let component: FullrecipeComponent;
  let fixture: ComponentFixture<FullrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
