import { Moment } from 'moment';

export interface TimeRange {
  from: string;
  to: string;
}

export interface OpeningHours {
  monday?: TimeRange;
  tuesday?: TimeRange;
  wednesday?: TimeRange;
  thursday?: TimeRange;
  friday?: TimeRange;
  saturday?: TimeRange;
  sunday?: TimeRange;
}

export interface DateExceptions {
  description: string;
  from: Moment;
  to?: Moment;
  closed: boolean;
}

export interface LibraryData {
  id: number;
  name: string;
  email: string;
  address: string;
  code: string;
  openingHours?: OpeningHours;
  dateExceptions?: DateExceptions[];
}

export class Library implements LibraryData {

  id: number;
  name: string;
  email: string;
  address: string;
  code: string;
  openingHours?: OpeningHours;
  dateExceptions?: DateExceptions[];

  fromJson(data){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.code = data.code;
    this.openingHours = data.openingHours;
    this.dateExceptions = data.dateExceptions;
  };

  isClosed(day) {
    if (!this.openingHours[day]) {
      return true;
    }
    return false;
  }
}
