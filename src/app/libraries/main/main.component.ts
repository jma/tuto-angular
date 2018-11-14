import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
// import { of, Observable } from 'rxjs';

import { LibrariesService } from '../libraries.service';

@Component({
  selector: 'libraries-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public library: Library;
  constructor(private librariesService: LibrariesService) {
    this.librariesService.currentLibrary.subscribe(library => this.library = library);
  }

  ngOnInit() {
    this.librariesService.loadLibrary(11);
  }
}
