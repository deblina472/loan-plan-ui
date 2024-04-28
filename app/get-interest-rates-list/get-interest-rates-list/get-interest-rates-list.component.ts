import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseInterestRates } from 'src/app/model/BaseInterestRates';

@Component({
  selector: 'app-get-interest-rates-list',
  templateUrl: './get-interest-rates-list.component.html',
  styleUrls: ['./get-interest-rates-list.component.css']
})
export class GetInterestRatesListComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  baseInterestRatesArray: BaseInterestRates[] = [];

  ngOnInit(): void {
    this.getInterestRatesList();
  }
  getInterestRatesList() {
    this.http.get<BaseInterestRates[]>("http://localhost:8098/api/interestrates")
      .subscribe(
        interest => {
          console.log(interest);
          this.baseInterestRatesArray = interest;
        }
      );
  }

}
