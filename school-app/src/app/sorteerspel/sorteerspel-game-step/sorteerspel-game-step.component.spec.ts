import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteerspelGameStepComponent } from './sorteerspel-game-step.component';

describe('SorteerspelGameStepComponent', () => {
  let component: SorteerspelGameStepComponent;
  let fixture: ComponentFixture<SorteerspelGameStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteerspelGameStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteerspelGameStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
