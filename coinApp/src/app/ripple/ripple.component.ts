import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {
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
  	this.rippleDetails()
  }
  rippleDetails(){
  	let obs = this._httpService.getRipple();
  	obs.subscribe(data => {
  		console.log("we got data about ripple", data)

  		this.fromSymbolusd = data["DISPLAY"]["XRP"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["XRP"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["XRP"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["XRP"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["XRP"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["XRP"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["XRP"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["XRP"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["XRP"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["XRP"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["XRP"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["XRP"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["XRP"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["XRP"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["XRP"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["XRP"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["XRP"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["XRP"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["XRP"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["XRP"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}




























