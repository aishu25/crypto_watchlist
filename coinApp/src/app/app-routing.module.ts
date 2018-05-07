import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { LitecoinComponent } from './litecoin/litecoin.component';
import { DigitalcashComponent } from './digitalcash/digitalcash.component';
import { MoneroComponent } from './monero/monero.component';
import { NxtComponent } from './nxt/nxt.component';
import { ZcashComponent } from './zcash/zcash.component';
import { RippleComponent } from './ripple/ripple.component';



const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'bitcoin',component: BitcoinComponent },
  { path: 'ethereum',component: EthereumComponent },
  { path: 'litecoin', component: LitecoinComponent },
  { path: 'digitalcash', component: DigitalcashComponent },
  { path: 'monero', component: MoneroComponent },
  { path: 'nxt', component: NxtComponent },
  { path: 'zcash', component: ZcashComponent },
  { path: 'ripple', component: RippleComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




