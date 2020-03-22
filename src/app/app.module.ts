import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, DashboardComponent, CurrencyDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
