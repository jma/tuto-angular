import { TestBed } from '@angular/core/testing';

import { LibrariesInMemoryService } from './libraries-in-memory.service';

describe('LibrariesInMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrariesInMemoryService = TestBed.get(LibrariesInMemoryService);
    expect(service).toBeTruthy();
  });
});
