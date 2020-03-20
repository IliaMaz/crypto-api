import { Component, OnInit } from "@angular/core";
import { CryptoService } from "src/app/services/crypto.service";
import { ApiRequest } from "src/app/model/api-request";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  usdObj;
  constructor(private cs: CryptoService) {}

  ngOnInit(): void {
    this.cs.getCryptoExchRate().subscribe((response: ApiRequest) => {
      this.usdObj = response.USD;
    });
  }
}
