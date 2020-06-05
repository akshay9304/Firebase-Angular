import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
// Angular Fire Impports

import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
// Component Imports
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

// Service Imports

import { ClientService } from "./services/client.service";

// Flash Messages

import { FlashMessagesModule } from 'angular2-flash-messages';


export const fireBaseConfig = {
    apiKey: "AIzaSyCbkZrnzoF7klpypB7as3lshnFVOI8Hb_8",
    authDomain: "clientpanel-d7e6c.firebaseapp.com",
    databaseURL: "https://clientpanel-d7e6c.firebaseio.com",
    projectId: "clientpanel-d7e6c",
    storageBucket: "clientpanel-d7e6c.appspot.com",
    messagingSenderId: "560153968124",
    appId: "1:560153968124:web:f76fdca33fb73845264679",
    measurementId: "G-MF228WCHFP"
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    FormsModule,
    FlashMessagesModule.forRoot(),


        
  ],
  providers: [AngularFireAuth,AngularFireDatabase,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
