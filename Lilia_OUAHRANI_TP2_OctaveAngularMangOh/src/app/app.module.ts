import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiOctaveServiceService } from './service/api-octave-service.service';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent ,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiOctaveServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
