import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // messageService must be public because we're binding to it in the template
  constructor(public messageService: MessageService) {}
}
