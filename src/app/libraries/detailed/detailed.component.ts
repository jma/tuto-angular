import { Component, OnInit, Input } from '@angular/core';
import { LibrariesService } from '../libraries.service';
import { Library } from '../library';

@Component({
  selector: 'libraries-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  library: Library;
  constructor(private librariesService: LibrariesService) {
    this.librariesService.currentLibrary.subscribe(library => this.library = library);
  }

  ngOnInit() {
  }

}
