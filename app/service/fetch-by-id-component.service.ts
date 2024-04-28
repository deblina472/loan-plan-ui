import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoanPlan } from "../model/LoanPlan";

@Injectable({ providedIn: 'root' })
export class FetchByIdComponentService {
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    getDataByIdService(planId: number) {
        return this.http.get(`http://localhost:8098/api/loanplans/${planId}`);
    }

}