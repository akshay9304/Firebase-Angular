import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Client } from "../../models/Client";
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(public clientservice: ClientService, public flashmessages: FlashMessagesService, public router: Router,
    public route: ActivatedRoute

  ) { }

  ngOnInit() {
    // Get ID

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    // Get Clients

    this.clientservice.getClient(this.id).valueChanges()
    
    // subscribe(client => {
    //     if(client.balance > 0) {
    //       this.hasBalance = true;
    //     }
    //     this.client = client;
    //     console.log(this.client);
        
    // })

  }

}
