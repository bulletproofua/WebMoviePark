/* tslint:disable */
import {
  ExternalServices,
  Genres,
  Countries,
  Persons,
  Roles,
  Nominees,
  IdentityUsers,
  Photos
} from '../index';

declare var Object: any;
export interface MoviesInterface {
  "MovieId": number;
  "Title": string;
  "Description"?: string;
  "Length"?: number;
  "Slogan"?: string;
  "PremiereDate"?: Date;
  "RatingAgeLimit"?: string;
  "Budget"?: number;
  "Rating": number;
  "TotalViews": number;
  "TrailerLink"?: string;
  externalServices?: ExternalServices[];
  genres?: Genres[];
  countries?: Countries[];
  persons?: Persons[];
  roles?: Roles[];
  nominees?: Nominees[];
  identityUsers?: IdentityUsers[];
  photos?: Photos[];
}

export class Movies implements MoviesInterface {
  "MovieId": number;
  "Title": string;
  "Description": string;
  "Length": number;
  "Slogan": string;
  "PremiereDate": Date;
  "RatingAgeLimit": string;
  "Budget": number;
  "Rating": number;
  "TotalViews": number;
  "TrailerLink": string;
  externalServices: ExternalServices[];
  genres: Genres[];
  countries: Countries[];
  persons: Persons[];
  roles: Roles[];
  nominees: Nominees[];
  identityUsers: IdentityUsers[];
  photos: Photos[];
  constructor(data?: MoviesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Movies`.
   */
  public static getModelName() {
    return "Movies";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Movies for dynamic purposes.
  **/
  public static factory(data: MoviesInterface): Movies{
    return new Movies(data);
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
      name: 'Movies',
      plural: 'Movies',
      path: 'Movies',
      properties: {
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "Title": {
          name: 'Title',
          type: 'string'
        },
        "Description": {
          name: 'Description',
          type: 'string'
        },
        "Length": {
          name: 'Length',
          type: 'number'
        },
        "Slogan": {
          name: 'Slogan',
          type: 'string'
        },
        "PremiereDate": {
          name: 'PremiereDate',
          type: 'Date'
        },
        "RatingAgeLimit": {
          name: 'RatingAgeLimit',
          type: 'string'
        },
        "Budget": {
          name: 'Budget',
          type: 'number'
        },
        "Rating": {
          name: 'Rating',
          type: 'number'
        },
        "TotalViews": {
          name: 'TotalViews',
          type: 'number'
        },
        "TrailerLink": {
          name: 'TrailerLink',
          type: 'string'
        },
      },
      relations: {
        externalServices: {
          name: 'externalServices',
          type: 'ExternalServices[]',
          model: 'ExternalServices'
        },
        genres: {
          name: 'genres',
          type: 'Genres[]',
          model: 'Genres'
        },
        countries: {
          name: 'countries',
          type: 'Countries[]',
          model: 'Countries'
        },
        persons: {
          name: 'persons',
          type: 'Persons[]',
          model: 'Persons'
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
        identityUsers: {
          name: 'identityUsers',
          type: 'IdentityUsers[]',
          model: 'IdentityUsers'
        },
        photos: {
          name: 'photos',
          type: 'Photos[]',
          model: 'Photos'
        },
      }
    }
  }
}
