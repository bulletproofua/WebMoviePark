/* tslint:disable */
import {
  MoviesPersons
} from '../index';

declare var Object: any;
export interface CrewRoleInterface {
  "CrewRoleId": number;
  "CrewRoleName": number;
  moviesPersons?: MoviesPersons;
}

export class CrewRole implements CrewRoleInterface {
  "CrewRoleId": number;
  "CrewRoleName": number;
  moviesPersons: MoviesPersons;
  constructor(data?: CrewRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CrewRole`.
   */
  public static getModelName() {
    return "CrewRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CrewRole for dynamic purposes.
  **/
  public static factory(data: CrewRoleInterface): CrewRole{
    return new CrewRole(data);
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
      name: 'CrewRole',
      plural: 'CrewRoles',
      path: 'CrewRoles',
      properties: {
        "CrewRoleId": {
          name: 'CrewRoleId',
          type: 'number'
        },
        "CrewRoleName": {
          name: 'CrewRoleName',
          type: 'number'
        },
      },
      relations: {
        moviesPersons: {
          name: 'moviesPersons',
          type: 'MoviesPersons',
          model: 'MoviesPersons'
        },
      }
    }
  }
}
