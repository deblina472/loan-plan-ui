import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseInterestRates } from "../model/BaseInterestRates";
import { LoanPlan } from "../model/LoanPlan";

@Injectable({ providedIn: 'root' })
export class AddLoanPlanComponentService {


    constructor(private http: HttpClient) { }
    getBaseInterestRatesService() {
        return this.http.get<BaseInterestRates[]>
            ("http://localhost:8098/api/interestrates")
    }
    postDataService(loanPlan: LoanPlan) {
        console.log(loanPlan);
        this.http.post("http://localhost:8098/api/addloanplans", loanPlan, { responseType: 'text' }).subscribe(
            response => {
                console.log(response);
                // loanPlan.status = "success";
                console.log(loanPlan);

            }
        )
    }

}