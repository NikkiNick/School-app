import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsmolensResultComponent } from './splitsmolens-result.component';

describe('SplitsmolensResultComponent', () => {
  let component: SplitsmolensResultComponent;
  let fixture: ComponentFixture<SplitsmolensResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsmolensResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsmolensResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
