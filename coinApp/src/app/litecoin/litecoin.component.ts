import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.component.html',
  styleUrls: ['./litecoin.component.css']
})
export class LitecoinComponent implements OnInit {

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
  	this.liteCoinDetails()
  }
  liteCoinDetails(){
  	let obs = this._httpService.getLitecoin();
  	obs.subscribe(data => {
  		console.log("we got data about litecoin", data)

  		this.fromSymbolusd = data["DISPLAY"]["LTG"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["LTG"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["LTG"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["LTG"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["LTG"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["LTG"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["LTG"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["LTG"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["LTG"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["LTG"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["LTG"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["LTG"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["LTG"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["LTG"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["LTG"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["LTG"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["LTG"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["LTG"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["LTG"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["LTG"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }

}




























