import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssessmentCardComponent } from './new-assessment-card.component';

describe('NewAssessmentCardComponent', () => {
  let component: NewAssessmentCardComponent;
  let fixture: ComponentFixture<NewAssessmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssessmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAssessmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
