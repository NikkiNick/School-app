import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkdDisplayComponent } from './gdkd-display.component';

describe('GdkdDisplayComponent', () => {
  let component: GdkdDisplayComponent;
  let fixture: ComponentFixture<GdkdDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkdDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
