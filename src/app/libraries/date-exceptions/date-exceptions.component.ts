import { Component, OnInit, Input } from '@angular/core';

import { DateExceptions } from '../library';

@Component({
  selector: 'libraries-date-exceptions',
  templateUrl: './date-exceptions.component.html',
  styleUrls: ['./date-exceptions.component.scss']
})
export class DateExceptionsComponent implements OnInit {

  @Input() dateExceptions: DateExceptions;

  constructor() { }

  ngOnInit() {
  }

}
