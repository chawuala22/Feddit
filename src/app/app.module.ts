import {environment} from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'





@NgModule({
  declarations: [
    AppComponent, NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebaseConfig)
    ,AngularFireAuthModule,AngularFireDatabaseModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
