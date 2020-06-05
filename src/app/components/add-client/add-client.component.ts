import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Client } from "../../models/Client";
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  client:Client = {
          firstName:'',
          lastName:'',
          email:'',
          phone:'',
          balance : 0
  }

  disableBalanceOnAdd:boolean = false;

  constructor(public flashmessages:FlashMessagesService, public router:Router,public clientservice:ClientService) { }

  ngOnInit() {
  }

  onSubmit({value,valid} : {value:Client,valid:boolean}) {
    if(this.disableBalanceOnAdd) {
      value.balance = 0;
    }
        
    if(!valid) {
        this.flashmessages.show('Please fill in all fields',{cssClass:'alert-danger', timeout:4000});
        this.router.navigate(['add-client']);
    } else {
      // Add New Client
      this.clientservice.newClient(value);
      this.flashmessages.show('New Client Added',{cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/']);
    }
  }

}
