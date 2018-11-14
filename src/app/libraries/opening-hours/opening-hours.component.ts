import { Component, OnInit, Input } from '@angular/core';
import { OpeningHours } from '../library';
import { LibrariesService } from '../libraries.service';
import { Library } from '../library';

@Component({
  selector: 'libraries-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent implements OnInit {

  library: Library;

  days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];

  constructor(private librariesService: LibrariesService) {
    this.librariesService.currentLibrary.subscribe(library => this.library = library);
  }

  ngOnInit() {
  }
}
