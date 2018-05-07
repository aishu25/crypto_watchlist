import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zcash',
  templateUrl: './zcash.component.html',
  styleUrls: ['./zcash.component.css']
})
export class ZcashComponent implements OnInit {
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
  	this.zCashDetails();
  }
  zCashDetails(){
  	let obs = this._httpService.getZcash();
  	obs.subscribe(data => {
  		console.log("we got data about zcash", data)

  		this.fromSymbolusd = data["DISPLAY"]["ZCG"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["ZCG"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["ZCG"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["ZCG"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["ZCG"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["ZCG"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["ZCG"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["ZCG"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["ZCG"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["ZCG"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["ZCG"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["ZCG"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["ZCG"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["ZCG"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["ZCG"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["ZCG"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["ZCG"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["ZCG"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["ZCG"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["ZCG"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}
