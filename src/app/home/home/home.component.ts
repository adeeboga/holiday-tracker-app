import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  i=0;
  message: string = 'loading :(';
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }
 
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];
  ngOnInit(): void {
    INITIAL_EVENTS
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    const id = "calendarEvent" + this.i;
    const start = selectInfo.startStr;
    const end = selectInfo.endStr;
    const allDay = selectInfo.allDay
    if (title) {
      calendarApi.addEvent({
        id,
        title,
        start,
        end
      });
    }
    // event = new Event(id, title, start, end);

    INITIAL_EVENTS.push(calendarApi.getEventById("calendarEvent" + (this.i - 1)));
    localStorage.setItem("calendarEvent" + this.i++, JSON.stringify(calendarApi.getEventById("calendarEvent" + (this.i - 1))));

    console.log(localStorage.getItem(JSON.stringify(calendarApi.getEventById("calendarEvent" + (this.i - 1)))));
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}


