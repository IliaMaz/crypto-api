export interface ApiRequest {
  USD: [SingleCurrency];
  AUD: [SingleCurrency];
  BRL: [SingleCurrency];
  CAD: [SingleCurrency];
  CHF: [SingleCurrency];
  CLP: [SingleCurrency];
  CNY: [SingleCurrency];
  DKK: [SingleCurrency];
  EUR: [SingleCurrency];
  GBP: [SingleCurrency];
  HKD: [SingleCurrency];
  INR: [SingleCurrency];
  ISK: [SingleCurrency];
  JPY: [SingleCurrency];
  KRW: [SingleCurrency];
  NZD: [SingleCurrency];
  PLN: [SingleCurrency];
  RUB: [SingleCurrency];
  SEK: [SingleCurrency];
  SGD: [SingleCurrency];
  THB: [SingleCurrency];
  TRY: [SingleCurrency];
}

export interface SingleCurrency {
  "15m": number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}
