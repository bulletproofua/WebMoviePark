/* tslint:disable */
import {
  Movies,
  Users
} from '../index';

declare var Object: any;
export interface IdentityUsersInterface {
  "UserId"?: number;
  "Email": string;
  "UserName": string;
  "UserPassword": string;
  "UserPhoneNumber"?: string;
  movies?: Movies[];
  users?: Users;
}

export class IdentityUsers implements IdentityUsersInterface {
  "UserId": number;
  "Email": string;
  "UserName": string;
  "UserPassword": string;
  "UserPhoneNumber": string;
  movies: Movies[];
  users: Users;
  constructor(data?: IdentityUsersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IdentityUsers`.
   */
  public static getModelName() {
    return "IdentityUsers";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IdentityUsers for dynamic purposes.
  **/
  public static factory(data: IdentityUsersInterface): IdentityUsers{
    return new IdentityUsers(data);
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
      name: 'IdentityUsers',
      plural: 'IdentityUsers',
      path: 'IdentityUsers',
      properties: {
        "UserId": {
          name: 'UserId',
          type: 'number'
        },
        "Email": {
          name: 'Email',
          type: 'string'
        },
        "UserName": {
          name: 'UserName',
          type: 'string'
        },
        "UserPassword": {
          name: 'UserPassword',
          type: 'string'
        },
        "UserPhoneNumber": {
          name: 'UserPhoneNumber',
          type: 'string'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies[]',
          model: 'Movies'
        },
        users: {
          name: 'users',
          type: 'Users',
          model: 'Users'
        },
      }
    }
  }
}
