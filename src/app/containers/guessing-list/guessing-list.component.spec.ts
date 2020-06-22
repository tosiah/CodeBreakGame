import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingListComponent } from './guessing-list.component';

describe('GuessingListComponent', () => {
  let component: GuessingListComponent;
  let fixture: ComponentFixture<GuessingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
