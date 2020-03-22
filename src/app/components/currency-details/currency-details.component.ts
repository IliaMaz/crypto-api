import { Component, OnInit } from "@angular/core";
import { CryptoService } from "src/app/services/crypto.service";
import { ActivatedRoute } from "@angular/router";
import { FormattedSingleCurrency, ApiRequest } from "src/app/model/api-request";

@Component({
  selector: "app-currency-details",
  templateUrl: "./currency-details.component.html",
  styleUrls: ["./currency-details.component.css"]
})
export class CurrencyDetailsComponent implements OnInit {
  objArr: any[];
  singleArr: FormattedSingleCurrency;
  constructor(private cs: CryptoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const capturedCurrency = params.get("currency");
      this.cs.getCryptoExchRate().subscribe((response: ApiRequest) => {
        this.objArr = Object.entries(response);
        this.singleArr = this.objArr.filter(
          single => single[0] === capturedCurrency
        )[0];
        // console.log(this.singleArr[1].last);
        // console.log(this.singleArr);
      });
    });
  }
}
