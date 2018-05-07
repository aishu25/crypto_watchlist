import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-digitalcash',
  templateUrl: './digitalcash.component.html',
  styleUrls: ['./digitalcash.component.css']
})
export class DigitalcashComponent implements OnInit {
  
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
  	this.digitalCashDetails()
  }
  digitalCashDetails(){
  	let obs = this._httpService.getDigitalCash();
  	obs.subscribe(data => {
  		console.log("we got data about digitalcash", data)

  		this.fromSymbolusd = data["DISPLAY"]["DASH"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["DASH"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["DASH"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["DASH"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["DASH"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["DASH"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["DASH"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["DASH"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["DASH"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["DASH"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["DASH"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["DASH"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["DASH"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["DASH"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["DASH"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["DASH"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["DASH"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["DASH"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["DASH"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["DASH"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}



























