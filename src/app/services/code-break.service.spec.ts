import { TestBed } from '@angular/core/testing';

import { CodeBreakService } from './code-break.service';

describe('CodeBreakService', () => {
  let service: CodeBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
