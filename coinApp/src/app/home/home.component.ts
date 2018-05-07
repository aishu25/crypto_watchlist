import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
  amount: any;
  coin_type: any;
  results_usd: any;
  results_eur: any;

  constructor(
  	private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
  }
  getValue(){
    let obs = this._httpService.getValue(this.coin_type);
    obs.subscribe(data => {
      console.log("amount : ",this.amount);
      console.log("got data",data)
      this.results_usd = (this.amount / data["USD"]).toFixed(2);
      this.results_eur = (this.amount / data["EUR"]).toFixed(2);
      console.log(this.results_usd);
      console.log(this.results_eur);
    })
  }
}
