import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monero',
  templateUrl: './monero.component.html',
  styleUrls: ['./monero.component.css']
})
export class MoneroComponent implements OnInit {
  

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
  	this.moneroDetails()
  }
  moneroDetails(){
  	let obs = this._httpService.getMonero();
  	obs.subscribe(data => {
  		console.log("we got data about monero", data)

  		this.fromSymbolusd = data["DISPLAY"]["XMRG"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["XMRG"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["XMRG"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["XMRG"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["XMRG"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["XMRG"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["XMRG"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["XMRG"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["XMRG"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["XMRG"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["XMRG"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["XMRG"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["XMRG"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["XMRG"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["XMRG"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["XMRG"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["XMRG"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["XMRG"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["XMRG"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["XMRG"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}


























