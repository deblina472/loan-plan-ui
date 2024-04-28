import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterestRatesListComponent } from './get-interest-rates-list.component';

describe('GetInterestRatesListComponent', () => {
  let component: GetInterestRatesListComponent;
  let fixture: ComponentFixture<GetInterestRatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInterestRatesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInterestRatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
