/* tslint:disable */
import {
  Movies,
  Persons
} from '../index';

declare var Object: any;
export interface RolesInterface {
  "RoleId": number;
  "MovieId": number;
  "PersonId": number;
  "RoleName": string;
  movies?: Movies;
  persons?: Persons;
}

export class Roles implements RolesInterface {
  "RoleId": number;
  "MovieId": number;
  "PersonId": number;
  "RoleName": string;
  movies: Movies;
  persons: Persons;
  constructor(data?: RolesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Roles`.
   */
  public static getModelName() {
    return "Roles";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Roles for dynamic purposes.
  **/
  public static factory(data: RolesInterface): Roles{
    return new Roles(data);
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
      name: 'Roles',
      plural: 'Roles',
      path: 'Roles',
      properties: {
        "RoleId": {
          name: 'RoleId',
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
        "RoleName": {
          name: 'RoleName',
          type: 'string'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
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
