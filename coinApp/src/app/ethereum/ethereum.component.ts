import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

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
  	this.ethereumDetails()
  }
  ethereumDetails(){
  	let obs = this._httpService.getEthereum();
  	obs.subscribe(data => {
  		console.log("we got data about ethereum", data)

  		this.fromSymbolusd = data["DISPLAY"]["ETH"]["USD"]["FROMSYMBOL"];
  		this.toSymbolusd = data["DISPLAY"]["ETH"]["USD"]["TOSYMBOL"];
  		this.usdPrice = data["DISPLAY"]["ETH"]["USD"]["PRICE"];
  		this.marketCapUsd = data["DISPLAY"]["ETH"]["USD"]["MKTCAP"];
  		
  		this.volumeHourUsd = data["DISPLAY"]["ETH"]["USD"]["VOLUME24HOUR"];
  		this.volumeHourToUsd = data["DISPLAY"]["ETH"]["USD"]["VOLUME24HOURTO"];
  		
  		this.lastVolumeUsd = data["DISPLAY"]["ETH"]["USD"]["LASTVOLUME"];
  		this.lastVolumeToUsd = data["DISPLAY"]["ETH"]["USD"]["LASTVOLUMETO"]
  		this.lastMarketUsd = data["DISPLAY"]["ETH"]["USD"]["LASTMARKET"];
      this.changepctUsd = data["DISPLAY"]["ETH"]["USD"]["CHANGEPCT24HOUR"]

  		this.fromSymboleur = data["DISPLAY"]["ETH"]["EUR"]["FROMSYMBOL"];
  		this.toSymboleur = data["DISPLAY"]["ETH"]["EUR"]["TOSYMBOL"];
  		this.eurPrice = data["DISPLAY"]["ETH"]["EUR"]["PRICE"];
  		this.marketCapEur = data["DISPLAY"]["ETH"]["EUR"]["MKTCAP"];

  		this.volumeHourEur = data["DISPLAY"]["ETH"]["EUR"]["VOLUME24HOUR"];
  		this.volumeHourToEur = data["DISPLAY"]["ETH"]["EUR"]["VOLUME24HOURTO"];

  		this.lastVolumeEur = data["DISPLAY"]["ETH"]["EUR"]["LASTVOLUME"];
  		this.lastVolumeToEur = data["DISPLAY"]["ETH"]["EUR"]["LASTVOLUMETO"]
  		this.lastMarketEur = data["DISPLAY"]["ETH"]["EUR"]["LASTMARKET"];
      this.changepctEur = data["DISPLAY"]["ETH"]["EUR"]["CHANGEPCT24HOUR"];
  	})
  }
}































