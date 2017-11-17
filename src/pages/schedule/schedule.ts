import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UniPage } from '../uni/uni';
import { AppInit } from '../../providers/app-init';
import { Http } from '@angular/http';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
eventSource;
viewTitle;
isToday: boolean;
calendar = {
    mode: 'month',
    startingDayWeek: 1,
    locale: 'es-ES',
    allDayLabel: 'Todo día',
    currentDate: new Date()
}; // these are the variable used by the calendar.

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
  this.eventSource = this.loadEvents(AppInit)
  console.log("events source->",this.eventSource);
  this.onTimeSelected(new Date());
  }

      onViewTitleChanged(title) {
          this.viewTitle = title;
      }

      onEventSelected(event) {
          console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
      }
      changeMode(mode) {
          this.calendar.mode = mode;
      }
      today() {
          this.calendar.currentDate = new Date();
      }
      onTimeSelected(ev) {
          console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
              (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
      }
      onCurrentDateChanged(event:Date) {
          var today = new Date();
          today.setHours(0, 0, 0, 0);
          event.setHours(0, 0, 0, 0);
          this.isToday = today.getTime() === event.getTime();
      }
      loadEvents(AppInit){
      var i = 0;
      var events = [];
      this.http.get('http://'+AppInit.api+'/events/').map(res => res.json()).subscribe(data => {
           for (i = 0; i < data.length ; i++) {
          events.push({
           title: data[i].name,
           startTime: new Date(data[i].begin_date),
           endTime: new Date(data[i].end_date),
           allDay: false
           });
           }
      });

      this.eventSource = events;
      console.log("dentro function",this.eventSource)
      return events;
      }
      onRangeChanged(ev) {
          console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
      }
      markDisabled = (date:Date) => {
          var current = new Date();
          current.setHours(0, 0, 0);
          return date < current;
      };
  OpenUni(){
    this.navCtrl.push(UniPage);
  }
}
