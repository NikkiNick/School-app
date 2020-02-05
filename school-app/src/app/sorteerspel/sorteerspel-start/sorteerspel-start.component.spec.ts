import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteerspelStartComponent } from './sorteerspel-start.component';

describe('SorteerspelStartComponent', () => {
  let component: SorteerspelStartComponent;
  let fixture: ComponentFixture<SorteerspelStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteerspelStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteerspelStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
