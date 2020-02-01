import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkdStartComponent } from './gdkd-start.component';

describe('GdkdStartComponent', () => {
  let component: GdkdStartComponent;
  let fixture: ComponentFixture<GdkdStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkdStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkdStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
