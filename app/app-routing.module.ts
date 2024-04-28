import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanPlanComponent } from './create-loan-plan/add-loan-plan/add-loan-plan.component';
import { FetchByIdComponent } from './fetch-loan-plan-by-id/fetch-by-id/fetch-by-id.component';
import { FetchLoanPlansComponent } from './fetch-loan-plans/fetch-loan-plans.component';
import { GetInterestRatesListComponent } from './get-interest-rates-list/get-interest-rates-list/get-interest-rates-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdAdminService } from './service/auth-guardmanager.service';
import { UpdateComponent } from './update-loan-plan/update/update.component';

const routes: Routes = [
  {
    path: 'api/addloanplans',
    component: AddLoanPlanComponent,
    canActivate: [AuthGaurdAdminService]
  },
  {
    path: 'api/loanplans',
    component: FetchLoanPlansComponent
  },
  {
    path: 'api/loanplans/:planId',
    component: FetchByIdComponent
  },

  {
    path: 'api/updateloanplans/:planId',
    component: UpdateComponent,
    canActivate: [AuthGaurdAdminService]
  },
  {
    path: 'api/interestrates',
    component: GetInterestRatesListComponent,
    canActivate: [AuthGaurdAdminService]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
