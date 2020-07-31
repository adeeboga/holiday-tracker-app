import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Concediu Test1',
    start: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Test2',
    start: TODAY_STR + 'T18:00:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Ade',
    start: '2020-07-02T12:00:00+03:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Test1',
    start: '2020-07-05T12:00:00+03:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Test2',
    start: '2020-07-10T12:00:00+03:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Ade',
    start: '2020-08-02T12:00:00+03:00'
  },
  {
    id: createEventId(),
    title: 'Concediu Admin',
    start: '2020-08-01T12:00:00+03:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}


export function getEvent(key: string){
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error('Error getting data from localStorage', e);
    return null;
  }

}