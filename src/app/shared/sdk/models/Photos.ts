/* tslint:disable */
import {
  Persons,
  PhotosTypes
} from '../index';

declare var Object: any;
export interface PhotosInterface {
  "PhotoId"?: number;
  "Link": string;
  "PhotoTypeId": number;
  persons?: Persons[];
  photosTypes?: PhotosTypes;
  photos?: Photos[];
}

export class Photos implements PhotosInterface {
  "PhotoId": number;
  "Link": string;
  "PhotoTypeId": number;
  persons: Persons[];
  photosTypes: PhotosTypes;
  photos: Photos[];
  constructor(data?: PhotosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Photos`.
   */
  public static getModelName() {
    return "Photos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Photos for dynamic purposes.
  **/
  public static factory(data: PhotosInterface): Photos{
    return new Photos(data);
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
      name: 'Photos',
      plural: 'Photos',
      path: 'Photos',
      properties: {
        "PhotoId": {
          name: 'PhotoId',
          type: 'number'
        },
        "Link": {
          name: 'Link',
          type: 'string'
        },
        "PhotoTypeId": {
          name: 'PhotoTypeId',
          type: 'number'
        },
      },
      relations: {
        persons: {
          name: 'persons',
          type: 'Persons[]',
          model: 'Persons'
        },
        photosTypes: {
          name: 'photosTypes',
          type: 'PhotosTypes',
          model: 'PhotosTypes'
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
