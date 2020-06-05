import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients:Client[] = [];
  totalOwed:number;
  clientList:any = [];
  constructor(public clientService:ClientService) {
   }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients  => {
      this.clients = clients;
      this.clientList = clients
      //this.clientList.push(clients);
      console.log(this.clients);
      
      this.getTotalOwed()
    })
  }

  getTotalOwed() {
    let total = 0;
    for(let i = 0;i < this.clientList.length;i++){
      total += this.clientList[i].balance;
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }

}
