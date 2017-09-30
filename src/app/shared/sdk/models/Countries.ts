/* tslint:disable */
import {
  Movies,
  Persons
} from '../index';

declare var Object: any;
export interface CountriesInterface {
  "CountryId": number;
  "CountryName": string;
  movies?: Movies[];
  persons?: Persons;
}

export class Countries implements CountriesInterface {
  "CountryId": number;
  "CountryName": string;
  movies: Movies[];
  persons: Persons;
  constructor(data?: CountriesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Countries`.
   */
  public static getModelName() {
    return "Countries";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Countries for dynamic purposes.
  **/
  public static factory(data: CountriesInterface): Countries{
    return new Countries(data);
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
      name: 'Countries',
      plural: 'Countries',
      path: 'Countries',
      properties: {
        "CountryId": {
          name: 'CountryId',
          type: 'number'
        },
        "CountryName": {
          name: 'CountryName',
          type: 'string'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies[]',
          model: 'Movies'
        },
        persons: {
          name: 'persons',
          type: 'Persons',
          model: 'Persons'
        },
      }
    }
  }
}
