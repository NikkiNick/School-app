import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsmolensDisplayComponent } from './splitsmolens-display.component';

describe('SplitsmolensDisplayComponent', () => {
  let component: SplitsmolensDisplayComponent;
  let fixture: ComponentFixture<SplitsmolensDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsmolensDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsmolensDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
