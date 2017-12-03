/* tslint:disable */
import {
  Photos
} from '../index';

declare var Object: any;
export interface PhotosTypesInterface {
  "PhotoTypeId"?: number;
  "PhotoType": string;
  photos?: Photos;
}

export class PhotosTypes implements PhotosTypesInterface {
  "PhotoTypeId": number;
  "PhotoType": string;
  photos: Photos;
  constructor(data?: PhotosTypesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhotosTypes`.
   */
  public static getModelName() {
    return "PhotosTypes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhotosTypes for dynamic purposes.
  **/
  public static factory(data: PhotosTypesInterface): PhotosTypes{
    return new PhotosTypes(data);
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
      name: 'PhotosTypes',
      plural: 'PhotosTypes',
      path: 'PhotosTypes',
      properties: {
        "PhotoTypeId": {
          name: 'PhotoTypeId',
          type: 'number'
        },
        "PhotoType": {
          name: 'PhotoType',
          type: 'string'
        },
      },
      relations: {
        photos: {
          name: 'photos',
          type: 'Photos',
          model: 'Photos'
        },
      }
    }
  }
}
