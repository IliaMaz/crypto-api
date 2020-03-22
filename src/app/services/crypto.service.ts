import { Injectable, getDebugNode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormattedSingleCurrency, ApiRequest } from "../model/api-request";

@Injectable({
  providedIn: "root"
})
export class CryptoService {
  objArr = [];
  constructor(private http: HttpClient) {}

  getCryptoExchRate() {
    return this.http.get("https://blockchain.info/ticker");
  }
}
