import { Injectable } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprcated";

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs";
import { Client } from 'src/app/models/Client';
//import { AngularFireList } from 'angularfire2/node_modules/@angular/fire/database/interfaces';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients:any;

  
  client:AngularFireObject<any>;

  clientList = [];

  constructor(public af:AngularFireDatabase) { 
    this.client = af.object('item');
    this.clients = this.af.list('/clients').valueChanges();
    console.log(this.clientList);
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client) {
    //this.clients.push(client);
    this.af.list('/clients').push(client);

 }

 getClient(id:number) {
  this.client = this.af.object('/clients/'+id) as AngularFireObject<Client>;
  return this.client;
}
}
