import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
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
  ngOnInit(): void {
   
  }
  
  sendMessage(value: string):void{
    this.messageService.sendMessage("Message from Receiver component to sender component");
    this.messageService.sendMessage(value);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
