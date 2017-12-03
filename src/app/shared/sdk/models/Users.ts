/* tslint:disable */
import {
  IdentityUsers,
  Photos,
  Staff
} from '../index';

declare var Object: any;
export interface UsersInterface {
  "UserId"?: number;
  "Age"?: number;
  "Sex"?: string;
  "PhotoId"?: string;
  "StaffId": number;
  identityUsers?: IdentityUsers;
  photos?: Photos;
  staffs?: Staff;
}

export class Users implements UsersInterface {
  "UserId": number;
  "Age": number;
  "Sex": string;
  "PhotoId": string;
  "StaffId": number;
  identityUsers: IdentityUsers;
  photos: Photos;
  staffs: Staff;
  constructor(data?: UsersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Users`.
   */
  public static getModelName() {
    return "Users";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Users for dynamic purposes.
  **/
  public static factory(data: UsersInterface): Users{
    return new Users(data);
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
      name: 'Users',
      plural: 'Users',
      path: 'Users',
      properties: {
        "UserId": {
          name: 'UserId',
          type: 'number'
        },
        "Age": {
          name: 'Age',
          type: 'number'
        },
        "Sex": {
          name: 'Sex',
          type: 'string'
        },
        "PhotoId": {
          name: 'PhotoId',
          type: 'string'
        },
        "StaffId": {
          name: 'StaffId',
          type: 'number'
        },
      },
      relations: {
        identityUsers: {
          name: 'identityUsers',
          type: 'IdentityUsers',
          model: 'IdentityUsers'
        },
        photos: {
          name: 'photos',
          type: 'Photos',
          model: 'Photos'
        },
        staffs: {
          name: 'staffs',
          type: 'Staff',
          model: 'Staff'
        },
      }
    }
  }
}
