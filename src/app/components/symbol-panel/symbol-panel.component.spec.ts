import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolPanelComponent } from './symbol-panel.component';

describe('SymbolPanelComponent', () => {
  let component: SymbolPanelComponent;
  let fixture: ComponentFixture<SymbolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
