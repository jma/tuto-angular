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

export interface Library {
  id: number;
  name: string;
  email: string;
  address: string;
  code: string;
  openingHours?: OpeningHours;
  dateExceptions?: DateExceptions[];
}

