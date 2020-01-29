import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsmolensGameStepComponent } from './splitsmolens-game-step.component';

describe('SplitsmolensGameStepComponent', () => {
  let component: SplitsmolensGameStepComponent;
  let fixture: ComponentFixture<SplitsmolensGameStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsmolensGameStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsmolensGameStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
