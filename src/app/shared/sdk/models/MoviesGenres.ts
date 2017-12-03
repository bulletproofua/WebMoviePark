/* tslint:disable */
import {
  Movies,
  Genres
} from '../index';

declare var Object: any;
export interface MoviesGenresInterface {
  "MovieGenreId"?: number;
  "MovieId": number;
  "GenreId": number;
  movies?: Movies;
  genres?: Genres;
}

export class MoviesGenres implements MoviesGenresInterface {
  "MovieGenreId": number;
  "MovieId": number;
  "GenreId": number;
  movies: Movies;
  genres: Genres;
  constructor(data?: MoviesGenresInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MoviesGenres`.
   */
  public static getModelName() {
    return "MoviesGenres";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MoviesGenres for dynamic purposes.
  **/
  public static factory(data: MoviesGenresInterface): MoviesGenres{
    return new MoviesGenres(data);
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
      name: 'MoviesGenres',
      plural: 'MoviesGenres',
      path: 'MoviesGenres',
      properties: {
        "MovieGenreId": {
          name: 'MovieGenreId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "GenreId": {
          name: 'GenreId',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
          model: 'Movies'
        },
        genres: {
          name: 'genres',
          type: 'Genres',
          model: 'Genres'
        },
      }
    }
  }
}
