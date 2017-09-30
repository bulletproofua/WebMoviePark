/* tslint:disable */
import {
  Movies
} from '../index';

declare var Object: any;
export interface GenresInterface {
  "GenreId": number;
  "GenreType": string;
  movies?: Movies[];
}

export class Genres implements GenresInterface {
  "GenreId": number;
  "GenreType": string;
  movies: Movies[];
  constructor(data?: GenresInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Genres`.
   */
  public static getModelName() {
    return "Genres";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Genres for dynamic purposes.
  **/
  public static factory(data: GenresInterface): Genres{
    return new Genres(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Genres',
      plural: 'Genres',
      path: 'Genres',
      properties: {
        "GenreId": {
          name: 'GenreId',
          type: 'number'
        },
        "GenreType": {
          name: 'GenreType',
          type: 'string'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies[]',
          model: 'Movies'
        },
      }
    }
  }
}
