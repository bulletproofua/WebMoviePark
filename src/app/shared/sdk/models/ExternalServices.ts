/* tslint:disable */
import {
  Movies,
  Photos
} from '../index';

declare var Object: any;
export interface ExternalServicesInterface {
  "ExternalServiceId"?: number;
  "ServiceName": string;
  "Link": string;
  "PhotoId"?: number;
  movies?: Movies[];
  photos?: Photos;
}

export class ExternalServices implements ExternalServicesInterface {
  "ExternalServiceId": number;
  "ServiceName": string;
  "Link": string;
  "PhotoId": number;
  movies: Movies[];
  photos: Photos;
  constructor(data?: ExternalServicesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExternalServices`.
   */
  public static getModelName() {
    return "ExternalServices";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExternalServices for dynamic purposes.
  **/
  public static factory(data: ExternalServicesInterface): ExternalServices{
    return new ExternalServices(data);
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
      name: 'ExternalServices',
      plural: 'ExternalServices',
      path: 'ExternalServices',
      properties: {
        "ExternalServiceId": {
          name: 'ExternalServiceId',
          type: 'number'
        },
        "ServiceName": {
          name: 'ServiceName',
          type: 'string'
        },
        "Link": {
          name: 'Link',
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
        photos: {
          name: 'photos',
          type: 'Photos',
          model: 'Photos'
        },
      }
    }
  }
}
