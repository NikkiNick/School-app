import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteerspelResultComponent } from './sorteerspel-result.component';

describe('SorteerspelResultComponent', () => {
  let component: SorteerspelResultComponent;
  let fixture: ComponentFixture<SorteerspelResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteerspelResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteerspelResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
