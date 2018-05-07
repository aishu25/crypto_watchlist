import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './home/home.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { LitecoinComponent } from './litecoin/litecoin.component';
import { DigitalcashComponent } from './digitalcash/digitalcash.component';
import { MoneroComponent } from './monero/monero.component';
import { NxtComponent } from './nxt/nxt.component';
import { ZcashComponent } from './zcash/zcash.component';
import { RippleComponent } from './ripple/ripple.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BitcoinComponent,
    EthereumComponent,
    LitecoinComponent,
    DigitalcashComponent,
    MoneroComponent,
    NxtComponent,
    ZcashComponent,
    RippleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
