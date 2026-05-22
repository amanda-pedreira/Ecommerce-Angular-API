import { TestBed } from '@angular/core/testing';

import { ContatosServiceService } from './contatos-service.service';

describe('ContatosServiceService', () => {
  let service: ContatosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
