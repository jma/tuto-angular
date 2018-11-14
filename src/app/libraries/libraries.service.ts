import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Library } from './library';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LibrariesService {

  private librariesUrl = 'api/libraries';

  currentLibrary: Subject<Library> = new BehaviorSubject<Library>(null);

  constructor(private http: HttpClient) { }

  loadLibrary(id: number) {
    this.http.get<Library>(this.librariesUrl + '/' + id).subscribe(library => {
      console.log(library);
      this.setCurrentLibrary(library);
    });
  }

  setCurrentLibrary(library:Library) {
    const lib = new Library();
    lib.fromJson(library);
    this.currentLibrary.next(lib);
  }

  saveLibrary(library: Library){
    this.http.put<Library>(this.librariesUrl, library, httpOptions).subscribe(library => this.setCurrentLibrary(library), error => console.log('error' + error));
  }
}
