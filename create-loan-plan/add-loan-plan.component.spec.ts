import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanPlanComponent } from './add-loan-plan.component';

describe('AddLoanPlanComponent', () => {
  let component: AddLoanPlanComponent;
  let fixture: ComponentFixture<AddLoanPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLoanPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
