import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	// privateKey = "BJROlwolA4mshq0Fo750i8XFR8lrp1nwGWwjsnQsHZGStfixIU"

  constructor(private _http: HttpClient) { }


  getBits(fsym,tsyms) {
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsym=" + fsym + "&tsyms=" + tsyms);
  		
  }
  getBitcoin(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR")
  }

  getEthereum(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD,EUR")
  }

  getLitecoin(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTG&tsyms=USD,EUR")	
  }
  getDigitalCash(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DASH&tsyms=USD,EUR")
  }
  getMonero(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XMRG&tsyms=USD,EUR")	
  }
  getNxt(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=NXT&tsyms=USD,EUR")		
  }
  getZcash(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ZCG&tsyms=USD,EUR")
  }
  getRipple(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD,EUR")
  }
  getValue(coin_type){
  	return this._http.get("https://min-api.cryptocompare.com/data/price?fsym="+ coin_type + "&tsyms=USD,EUR")
  }
}
