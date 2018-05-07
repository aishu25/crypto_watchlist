import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtComponent } from './nxt.component';

describe('NxtComponent', () => {
  let component: NxtComponent;
  let fixture: ComponentFixture<NxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
