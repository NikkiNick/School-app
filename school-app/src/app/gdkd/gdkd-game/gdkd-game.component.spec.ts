import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkdGameComponent } from './gdkd-game.component';

describe('GdkdGameComponent', () => {
  let component: GdkdGameComponent;
  let fixture: ComponentFixture<GdkdGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkdGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkdGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
