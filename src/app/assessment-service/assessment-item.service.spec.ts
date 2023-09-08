import { TestBed } from '@angular/core/testing';

import { AssessmentItemService } from './assessment-item.service';

describe('AssessmentItemService', () => {
  let service: AssessmentItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
