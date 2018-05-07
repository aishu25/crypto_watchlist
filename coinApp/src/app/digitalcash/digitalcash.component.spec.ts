import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalcashComponent } from './digitalcash.component';

describe('DigitalcashComponent', () => {
  let component: DigitalcashComponent;
  let fixture: ComponentFixture<DigitalcashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalcashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
