import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolChoiceComponent } from './symbol-choice.component';

describe('SymbolChoiceComponent', () => {
  let component: SymbolChoiceComponent;
  let fixture: ComponentFixture<SymbolChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
