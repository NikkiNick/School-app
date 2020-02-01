import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkdResultComponent } from './gdkd-result.component';

describe('GdkdResultComponent', () => {
  let component: GdkdResultComponent;
  let fixture: ComponentFixture<GdkdResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkdResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkdResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
