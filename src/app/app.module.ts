import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TransactionComponent } from './transaction/transaction.component';
import { StaticColumnComponent } from './static-column/static-column.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    TotalBalanceComponent,
    StatisticsComponent,
    TransactionComponent,
    StaticColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
