import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExceptionsComponent } from './date-exceptions.component';

describe('DateExceptionsComponent', () => {
  let component: DateExceptionsComponent;
  let fixture: ComponentFixture<DateExceptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExceptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
