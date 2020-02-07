import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './Child/Child.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './Services/Github.service';

@NgModule({
   declarations: [
      AppComponent,
      ChildComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [GithubService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
