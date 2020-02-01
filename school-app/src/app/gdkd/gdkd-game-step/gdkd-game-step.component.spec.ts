import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkdGameStepComponent } from './gdkd-game-step.component';

describe('GdkdGameStepComponent', () => {
  let component: GdkdGameStepComponent;
  let fixture: ComponentFixture<GdkdGameStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkdGameStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkdGameStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
