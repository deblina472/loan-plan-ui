import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchLoanPlansComponent } from './fetch-loan-plans.component';

describe('FetchLoanPlansComponent', () => {
  let component: FetchLoanPlansComponent;
  let fixture: ComponentFixture<FetchLoanPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchLoanPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchLoanPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
