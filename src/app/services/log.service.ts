import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Observable} from 'rxjs';
import {of} from 'rxjs';

import {Log} from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSrc = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSrc.asObservable();

  constructor() {
      this.logs = [
          {id: '1', text: 'Generated Components', date: new Date('07/29/2018 12:54:45')},
          {id: '2', text: 'Added Bootstrap', date: new Date('07/29/2018 13:34:49')},
          {id: '3', text: 'Added Logs Components', date: new Date('07/30/2018 09:24:05')},
      ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  addLog(log: Log) {
      this.logs.unshift(log);
  }

  updateLog(log: Log) {
      this.logs.forEach((cur, index) => {
         if (log.id === cur.id) {
             this.logs.splice(index, 1);
         }
      });
      this.logs.unshift(log);
  }

  deleteLog(log: Log) {
      this.logs.forEach((cur, index) => {
          if (log.id === cur.id) {
              this.logs.splice(index, 1);
          }
      });
  }

  setFormLog(log: Log) {
      this.logSrc.next(log);
  }
}
