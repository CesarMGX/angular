import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  chats = [
    { 
      name: 'Alice Smith', 
      message: 'Hey, how\'s it going?',
      time: '10:30 AM', 
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Bob Johnson', message: 'Are you coming tonight?', time: '11:15 AM', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Charlie Brown', message: 'Don’t forget the meeting tomorrow.', time: '09:45 AM', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Diana Prince', message: 'Thanks for the help earlier!', time: '01:20 PM', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];
  
  constructor() {}

}
