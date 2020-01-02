import { TestBed } from '@angular/core/testing';

import { CommandListService } from './command-list.service';

describe('CommandListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandListService = TestBed.get(CommandListService);
    expect(service).toBeTruthy();
  });
});
