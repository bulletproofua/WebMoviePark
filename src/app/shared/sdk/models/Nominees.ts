/* tslint:disable */
import {
  Persons,
  Movies,
  Roles
} from '../index';

declare var Object: any;
export interface NomineesInterface {
  "NomeneeId"?: number;
  "AwardNominationId": number;
  "MovieId": number;
  "PersonId"?: number;
  "RoleId"?: number;
  "IsAwarded": boolean;
  persons?: Persons;
  movies?: Movies;
  roles?: Roles;
}

export class Nominees implements NomineesInterface {
  "NomeneeId": number;
  "AwardNominationId": number;
  "MovieId": number;
  "PersonId": number;
  "RoleId": number;
  "IsAwarded": boolean;
  persons: Persons;
  movies: Movies;
  roles: Roles;
  constructor(data?: NomineesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Nominees`.
   */
  public static getModelName() {
    return "Nominees";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Nominees for dynamic purposes.
  **/
  public static factory(data: NomineesInterface): Nominees{
    return new Nominees(data);
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
      name: 'Nominees',
      plural: 'Nominees',
      path: 'Nominees',
      properties: {
        "NomeneeId": {
          name: 'NomeneeId',
          type: 'number'
        },
        "AwardNominationId": {
          name: 'AwardNominationId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "PersonId": {
          name: 'PersonId',
          type: 'number'
        },
        "RoleId": {
          name: 'RoleId',
          type: 'number'
        },
        "IsAwarded": {
          name: 'IsAwarded',
          type: 'boolean'
        },
      },
      relations: {
        persons: {
          name: 'persons',
          type: 'Persons',
          model: 'Persons'
        },
        movies: {
          name: 'movies',
          type: 'Movies',
          model: 'Movies'
        },
        roles: {
          name: 'roles',
          type: 'Roles',
          model: 'Roles'
        },
      }
    }
  }
}
