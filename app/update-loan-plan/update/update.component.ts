import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanPlan } from 'src/app/model/LoanPlan';
import { FetchByIdComponentService } from 'src/app/service/fetch-by-id-component.service';
import { UpdateLoanPlanComponentService } from 'src/app/service/update-loan-plan-component.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    updateLoanPlanForm: FormGroup;
    currentDate: any = new Date();
    planId!: number;
    loanPlan: any;
    showSuccessMessage = false;

    constructor(private route: ActivatedRoute, private updateService: UpdateLoanPlanComponentService, private fetchById: FetchByIdComponentService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        console.log(this.route.snapshot.params['planId']);

        this.fetchById.getDataByIdService(this.route.snapshot.params['planId']).subscribe((result: any) => {
            console.log(result);
            var planIdInput = <HTMLInputElement>(document.getElementById("planId"));
            planIdInput.value = result['planId'];

            this.updateLoanPlanForm = new FormGroup({
                'planId': new FormControl(result['planId']),
                'planName': new FormControl(result['planName'], [Validators.pattern(/^[a-zA-Z\s]*$/)]),
                'principleAmount': new FormControl(result['principleAmount']),
                'tenure': new FormControl(result['tenure']),
                'interestRate': new FormControl(result['interestRate']),
                'interestAmount': new FormControl(result['interestAmount']),
                'totalPayable': new FormControl(result['totalPayable']),
                'emi': new FormControl(result['emi']),
                'planValidity': new FormControl(result['planValidity']),
                'planAddedOn': new FormControl(result['planAddedOn']),
                'loanTypeId': new FormControl(result['loanTypeId']),
                'loanType': new FormControl(result['loanType']),
                'baseInterestRate': new FormControl(result['baseInterestRate'])
            });
        });
    }


    getControl(name: any): AbstractControl {
        return this.updateLoanPlanForm.get(name);
    }
    onSubmit() {
        console.log(this.updateLoanPlanForm.value);
        this.updateService.updateLoanPlanComponentService(this.route.snapshot.params['planId'], this.updateLoanPlanForm.value)
            .subscribe((response) => {
                console.log(response);
            });

        this.showSuccessMessage = true;

    }
    removeMessage() {
        this.showSuccessMessage = false;
    }
}






    // updateLoanPlanForm = new FormGroup({
    //     'planId': new FormControl(''),
    //     'planName': new FormControl('',
    //         [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    //     'principleAmount': new FormControl(''),
    //     'tenure': new FormControl(),
    //     'interestRate': new FormControl(''),
    //     'interestAmount': new FormControl(''),
    //     'totalPayable': new FormControl(''),
    //     'emi': new FormControl(''),
    //     'planValidity': new FormControl('', Validators.required),
    //     'loanType': new FormControl(''),
    //     'loanTypeId': new FormControl(''),
    //     'baseInterestRate': new FormControl('')
    // });