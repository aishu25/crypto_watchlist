import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nxt',
  templateUrl: './nxt.component.html',
  styleUrls: ['./nxt.component.css']
})
export class NxtComponent implements OnInit {
  
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
  	this.nxtDetails()
  }
  nxtDetails(){
  	let obs = this._httpService.getNxt();
  	obs.subscribe(data => {
  		console.log("we got data about nxt", data)

  		this.fromSymbolusd = data["DISPLAY"]["NXT"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["NXT"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["NXT"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["NXT"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["NXT"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["NXT"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["NXT"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["NXT"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["NXT"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["NXT"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["NXT"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["NXT"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["NXT"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["NXT"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["NXT"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["NXT"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["NXT"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["NXT"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["NXT"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["NXT"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}























