import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
	//USD
	fromSymbolusd: "";
	toSymbolusd: "";
	usdPrice: "";
	highUsd: "";
	lowUsd: "";

	volumeHourUsd: "";
	volumeHourToUsd: "";
	marketCapUsd: "";
	
	lastVolumeUsd: "";
	lastVolumeToUsd: "";
	lastMarketUsd: "";
  changepctUsd: "";
  

	
	//EUR
	fromSymboleur: "";
	toSymboleur: "";
	eurPrice: "";

	volumeHourEur: "";
	volumeHourToEur: "";
	marketCapEur: "";
	
	lastVolumeEur: "";
	lastVolumeToEur: "";
	lastMarketEur: "";
  changepctEur: "";

	constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.bitCoinDetails()
  }

  bitCoinDetails(){
  	let obs = this._httpService.getBitcoin();
  	obs.subscribe(data => {
  		console.log("we got data about bitcoin", data)

  		this.fromSymbolusd = data["DISPLAY"]["BTC"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["BTC"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["BTC"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["BTC"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["BTC"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["BTC"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["BTC"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["BTC"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["BTC"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["BTC"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["BTC"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["BTC"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["BTC"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["BTC"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["BTC"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["BTC"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["BTC"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["BTC"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["BTC"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["BTC"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}






















