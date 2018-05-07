import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcashComponent } from './zcash.component';

describe('ZcashComponent', () => {
  let component: ZcashComponent;
  let fixture: ComponentFixture<ZcashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
