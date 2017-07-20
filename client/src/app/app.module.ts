import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { UpdaterService } from './updater.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
		HttpModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [
		HttpService,
		UpdaterService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
