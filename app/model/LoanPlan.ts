export class LoanPlan {
        planId: number;
        planName: string;
        principleAmount: number;
        tenure: number;
        interestRate: number;
        interestAmount: number;
        totalPayable: number;
        emi: number;
        planValidity: Date;
        planAddedOn: Date;
        loanTypeId: number;
        loanType?: string;
        baseInterestRate?: number;
}

