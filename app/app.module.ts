import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddLoanPlanComponent } from './create-loan-plan/add-loan-plan/add-loan-plan.component';
import { FetchLoanPlansComponent } from './fetch-loan-plans/fetch-loan-plans.component';
import { FetchByIdComponent } from './fetch-loan-plan-by-id/fetch-by-id/fetch-by-id.component';
import { UpdateComponent } from './update-loan-plan/update/update.component';
import { GetInterestRatesListComponent } from './get-interest-rates-list/get-interest-rates-list/get-interest-rates-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddLoanPlanComponent,
    FetchLoanPlansComponent,
    FetchByIdComponent,
    UpdateComponent,
    GetInterestRatesListComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
