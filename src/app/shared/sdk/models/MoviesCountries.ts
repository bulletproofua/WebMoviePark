/* tslint:disable */
import {
  Movies,
  Countries
} from '../index';

declare var Object: any;
export interface MoviesCountriesInterface {
  "MovieCountryId"?: number;
  "MovieId": number;
  "CountryId": number;
  movies?: Movies;
  countries?: Countries;
}

export class MoviesCountries implements MoviesCountriesInterface {
  "MovieCountryId": number;
  "MovieId": number;
  "CountryId": number;
  movies: Movies;
  countries: Countries;
  constructor(data?: MoviesCountriesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MoviesCountries`.
   */
  public static getModelName() {
    return "MoviesCountries";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MoviesCountries for dynamic purposes.
  **/
  public static factory(data: MoviesCountriesInterface): MoviesCountries{
    return new MoviesCountries(data);
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
      name: 'MoviesCountries',
      plural: 'MoviesCountries',
      path: 'MoviesCountries',
      properties: {
        "MovieCountryId": {
          name: 'MovieCountryId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "CountryId": {
          name: 'CountryId',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
          model: 'Movies'
        },
        countries: {
          name: 'countries',
          type: 'Countries',
          model: 'Countries'
        },
      }
    }
  }
}
