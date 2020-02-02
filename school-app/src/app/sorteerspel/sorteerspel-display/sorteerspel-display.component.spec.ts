import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteerspelDisplayComponent } from './sorteerspel-display.component';

describe('SorteerspelDisplayComponent', () => {
  let component: SorteerspelDisplayComponent;
  let fixture: ComponentFixture<SorteerspelDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteerspelDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteerspelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
