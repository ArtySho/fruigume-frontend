import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPanierComponent } from './list-panier/list-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPanierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
