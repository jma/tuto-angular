import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Library } from './library';
import * as moment from 'moment';

export class InMemoryLibraryService implements InMemoryDbService {
  createDb() {
    const libraries = [
    {
      id: 11,
      name: 'Bibliothèque cantonale valdôtaine, site de Pont- Saint-Martin',
      code: 'AOSTE-CANT2',
      email: 'reroilstest+aoste2@gmail.com',
      address: 'Viale Carlo Viola 93, 11026 Pont-Saint-Martin',
      openingHours: {
        'monday': {
          'from': '08:00',
          'to': '17:00'
        },
        'tuesday': {
          'from': '08:00',
          'to': '17:00'
        },
        'wednesday': {
          'from': '08:00',
          'to': '17:00'
        },
        'thursday': {
          'from': '08:00',
          'to': '17:00'
        },
        'friday': {
          'from': '08:00',
          'to': '20:00'
        },
        'saturday': {
          'from': '10:00',
          'to': '17:00'
        }
      },
      dateExceptions: [
      {
        description: 'Closed friday afternoon',
        closed: true,
        from: moment('2019-08-02 12:00'),
        to: moment('2019-08-02 17:00')
      }, {
        description: 'Day off',
        closed: true,
        from: moment('2018-08-01')
      }
      ]
    }];
    return {libraries};
  }

  // Overrides the genId method to ensure that a library always has an id.
  // If the libraries array is empty,
  // the method below returns the initial number (11).
  // if the libraries array is not empty, the method below returns the highest
  // hero id + 1.
  genId(libraries: Library[]): number {
    return libraries.length > 0 ? Math.max(...libraries.map(library => library.id)) + 1 : 11;
  }
}
