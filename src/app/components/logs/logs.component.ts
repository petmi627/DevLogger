import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('07/29/2018 12:54:45')},
      {id: '2', text: 'Added Bootstrap', date: new Date('07/29/2018 13:34:49')},
      {id: '3', text: 'Added Logs Components', date: new Date('07/30/2018 09:24:05')},
    ];
  }

}
