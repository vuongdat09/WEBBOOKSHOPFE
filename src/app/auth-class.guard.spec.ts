import { TestBed } from '@angular/core/testing';

import { AuthClassGuard } from './auth-class.guard';

describe('AuthClassGuard', () => {
  let guard: AuthClassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthClassGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
