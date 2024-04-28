import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseInterestRates } from 'src/app/model/BaseInterestRates';
import { LoanPlan } from 'src/app/model/LoanPlan';
import { AddLoanPlanComponentService } from 'src/app/service/add-loan-plan-component.service';

@Component({
  selector: 'app-add-loan-plan',
  templateUrl: './add-loan-plan.component.html',
  styleUrls: ['./add-loan-plan.component.css']
})
export class AddLoanPlanComponent implements OnInit {


  constructor(private http: HttpClient, private addLoanPlanComponentService: AddLoanPlanComponentService, private formBuilder: FormBuilder) { }

  loanPlanArray: LoanPlan[] = [];
  baseInterestRatesArray: BaseInterestRates[] = [];
  loanPlanForm!: FormGroup;
  integerRegex = /^\d+$/;
  currentDate: any = new Date();
  showSuccessMessage = false;

  ngOnInit(): void {
    this.loanPlanForm = this.formBuilder.group({
      'loanType': new FormControl(null, Validators.required),
      'loanTypeId': new FormControl(null, Validators.required),
      'baseInterestRate': new FormControl(null, Validators.required),
      'planName': new FormControl(null,
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      'principleAmount': new FormControl(null,
        [Validators.required, Validators.max(10000000), Validators.min(50000), Validators.pattern(this.integerRegex)]),
      'tenure': new FormControl(null, Validators.required),
      'planValidity': new FormControl(null, Validators.required)

    });

    this.addLoanPlanComponentService.getBaseInterestRatesService().subscribe(
      response => {
        this.baseInterestRatesArray = response;
      }
    );
  }

  getControl(name: any): AbstractControl | null {
    return this.loanPlanForm.get(name);
  }



  onSubmit() {
    this.showSuccessMessage = false;
    this.addLoanPlanComponentService.postDataService(this.loanPlanForm.value);
    setTimeout(() => {
      this.loanPlanForm.reset();
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 4000);
    }, 2000);
  }


}
