import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CryptoService {
  constructor(private http: HttpClient) {}
  getCryptoExchRate() {
    return this.http.get("https://blockchain.info/ticker");
  }
}
