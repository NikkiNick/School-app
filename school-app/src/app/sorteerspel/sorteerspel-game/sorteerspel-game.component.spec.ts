import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteerspelGameComponent } from './sorteerspel-game.component';

describe('SorteerspelGameComponent', () => {
  let component: SorteerspelGameComponent;
  let fixture: ComponentFixture<SorteerspelGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteerspelGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteerspelGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
