/* tslint:disable */
import {
  Awards
} from '../index';

declare var Object: any;
export interface AwardTypesInterface {
  "AwardTypeId": number;
  "AwardType": number;
  "AwardId"?: number;
  awards?: Awards;
}

export class AwardTypes implements AwardTypesInterface {
  "AwardTypeId": number;
  "AwardType": number;
  "AwardId": number;
  awards: Awards;
  constructor(data?: AwardTypesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AwardTypes`.
   */
  public static getModelName() {
    return "AwardTypes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AwardTypes for dynamic purposes.
  **/
  public static factory(data: AwardTypesInterface): AwardTypes{
    return new AwardTypes(data);
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
      name: 'AwardTypes',
      plural: 'AwardTypes',
      path: 'AwardTypes',
      properties: {
        "AwardTypeId": {
          name: 'AwardTypeId',
          type: 'number'
        },
        "AwardType": {
          name: 'AwardType',
          type: 'number'
        },
        "AwardId": {
          name: 'AwardId',
          type: 'number'
        },
      },
      relations: {
        awards: {
          name: 'awards',
          type: 'Awards',
          model: 'Awards'
        },
      }
    }
  }
}
