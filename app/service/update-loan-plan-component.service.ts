import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoanPlan } from "../model/LoanPlan";

@Injectable({ providedIn: 'root' })
export class UpdateLoanPlanComponentService {
    constructor(private http: HttpClient) { }

    updateLoanPlanComponentService(planId: number, data: any) {
        return this.http.put(`http://localhost:8098/api/updateloanplans/${planId}`, data);
    }



}

