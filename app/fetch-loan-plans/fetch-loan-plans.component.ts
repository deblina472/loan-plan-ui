import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoanPlan } from '../model/LoanPlan';

@Component({
  selector: 'app-fetch-loan-plans',
  templateUrl: './fetch-loan-plans.component.html',
  styleUrls: ['./fetch-loan-plans.component.css']
})
export class FetchLoanPlansComponent implements OnInit {

  constructor(private http: HttpClient) { }

  loanPlansArray: LoanPlan[] = [];

  ngOnInit(): void {
    this.fetchLoanPlans();
  }

  fetchLoanPlans() {
    this.http.get<LoanPlan[]>("http://localhost:8098/api/loanplans")
      .subscribe(
        response => {
          console.log(response);
          this.loanPlansArray = response;
        }
      );
  }

  onUpdate(planId: number) {
    let currentPlan = this.loanPlansArray.find((loanPlan) => {
      return loanPlan.planId === planId;
    });
    console.log(currentPlan);
  }




}
