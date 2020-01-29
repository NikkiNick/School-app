import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsmolensStartComponent } from './splitsmolens-start.component';

describe('SplitsmolensStartComponent', () => {
  let component: SplitsmolensStartComponent;
  let fixture: ComponentFixture<SplitsmolensStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsmolensStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsmolensStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
