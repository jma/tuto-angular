import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Library } from './library';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LibrariesService {

  private librariesUrl = 'api/libraries';
  currentLibrary: Subject<Library> = new BehaviorSubject<Library>(null);
  _currentLibrary: Library;
  constructor(private http: HttpClient) { }

  loadLibrary(id: number) {
    this.http.get<Library>(this.librariesUrl + '/' + id).subscribe(library => {
      this.setCurrentLibrary(library);
    });
  }

  setCurrentLibrary(library:Library) {
    this._currentLibrary = library;
    this.currentLibrary.next(library);
  }

  libraryIsClosed(day) {
    if (!this._currentLibrary.openingHours[day]) {
      return true;
    }
    return false;
  }
}
