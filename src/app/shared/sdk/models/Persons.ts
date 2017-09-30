/* tslint:disable */
import {
  Movies,
  Countries,
  Photos,
  Roles,
  Nominees
} from '../index';

declare var Object: any;
export interface PersonsInterface {
  "PersonId": number;
  "FirstName": string;
  "LastName": string;
  "Birthday"?: Date;
  "CountryId"?: number;
  "Description"?: string;
  "PhotoId"?: number;
  movies?: Movies[];
  countries?: Countries;
  photos?: Photos[];
  roles?: Roles[];
  nominees?: Nominees[];
}

export class Persons implements PersonsInterface {
  "PersonId": number;
  "FirstName": string;
  "LastName": string;
  "Birthday": Date;
  "CountryId": number;
  "Description": string;
  "PhotoId": number;
  movies: Movies[];
  countries: Countries;
  photos: Photos[];
  roles: Roles[];
  nominees: Nominees[];
  constructor(data?: PersonsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Persons`.
   */
  public static getModelName() {
    return "Persons";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Persons for dynamic purposes.
  **/
  public static factory(data: PersonsInterface): Persons{
    return new Persons(data);
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
      name: 'Persons',
      plural: 'Persons',
      path: 'Persons',
      properties: {
        "PersonId": {
          name: 'PersonId',
          type: 'number'
        },
        "FirstName": {
          name: 'FirstName',
          type: 'string'
        },
        "LastName": {
          name: 'LastName',
          type: 'string'
        },
        "Birthday": {
          name: 'Birthday',
          type: 'Date'
        },
        "CountryId": {
          name: 'CountryId',
          type: 'number'
        },
        "Description": {
          name: 'Description',
          type: 'string'
        },
        "PhotoId": {
          name: 'PhotoId',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies[]',
          model: 'Movies'
        },
        countries: {
          name: 'countries',
          type: 'Countries',
          model: 'Countries'
        },
        photos: {
          name: 'photos',
          type: 'Photos[]',
          model: 'Photos'
        },
        roles: {
          name: 'roles',
          type: 'Roles[]',
          model: 'Roles'
        },
        nominees: {
          name: 'nominees',
          type: 'Nominees[]',
          model: 'Nominees'
        },
      }
    }
  }
}
