import { TestBed } from '@angular/core/testing';

import { ConvertToBinaryService } from './convert-to-binary.service';

describe('ConvertToBinaryService', () => {
  let service: ConvertToBinaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertToBinaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
