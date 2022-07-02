import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.onMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  sendMessage(value:string):void{
    this.messageService.sendMessage("Message from Sender component to receiver component");
    this.messageService.sendMessage(value);
  }


  ngOnInit(): void {
  }

}
