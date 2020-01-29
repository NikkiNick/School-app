import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsmolensGameComponent } from './splitsmolens-game.component';

describe('SplitsmolensGameComponent', () => {
  let component: SplitsmolensGameComponent;
  let fixture: ComponentFixture<SplitsmolensGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsmolensGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsmolensGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
