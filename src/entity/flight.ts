import { Crewmember } from './crewmember';
import { Airport } from './airport';
import * as luxon from 'luxon';

export class Flight {
  id: number = 0;
  aircraft_registration: string = '';
  departure_airport: Airport = new Airport();
  arrival_airport: Airport = new Airport();

  distance: number = 0;

  estimated_time_departure: luxon.DateTime = luxon.DateTime.utc();
  estimated_time_arrival: luxon.DateTime = luxon.DateTime.utc();

  crewmembers: Array<Crewmember> = new Array<Crewmember>();

  public duration() {
    return this.estimated_time_departure.diff(this.estimated_time_arrival);
  }

  constructor(id: number) {
    this.id = id;
  }
}
