import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLibraryService }  from './libraries-in-memory.service';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { MainComponent } from './main/main.component';
import { DetailedComponent } from './detailed/detailed.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { DateExceptionsComponent } from './date-exceptions/date-exceptions.component';
import { LibrariesService } from './libraries.service';

@NgModule({
  providers: [
    LibrariesService
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLibraryService, { dataEncapsulation: false }
    )
  ],
  declarations: [MainComponent, DetailedComponent, OpeningHoursComponent, DateExceptionsComponent]
})
export class LibrariesModule { }
