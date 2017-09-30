/* tslint:disable */
import {
  AwardTypes,
  NominationTypes
} from '../index';

declare var Object: any;
export interface AwardsInterface {
  "AwardId": number;
  "Title": string;
  "AwardTypeId": number;
  "AwardDate": Date;
  "Site"?: string;
  "PhotoId"?: number;
  awardTypes?: AwardTypes;
  nominationTypes?: NominationTypes[];
}

export class Awards implements AwardsInterface {
  "AwardId": number;
  "Title": string;
  "AwardTypeId": number;
  "AwardDate": Date;
  "Site": string;
  "PhotoId": number;
  awardTypes: AwardTypes;
  nominationTypes: NominationTypes[];
  constructor(data?: AwardsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Awards`.
   */
  public static getModelName() {
    return "Awards";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Awards for dynamic purposes.
  **/
  public static factory(data: AwardsInterface): Awards{
    return new Awards(data);
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
      name: 'Awards',
      plural: 'Awards',
      path: 'Awards',
      properties: {
        "AwardId": {
          name: 'AwardId',
          type: 'number'
        },
        "Title": {
          name: 'Title',
          type: 'string'
        },
        "AwardTypeId": {
          name: 'AwardTypeId',
          type: 'number'
        },
        "AwardDate": {
          name: 'AwardDate',
          type: 'Date'
        },
        "Site": {
          name: 'Site',
          type: 'string'
        },
        "PhotoId": {
          name: 'PhotoId',
          type: 'number'
        },
      },
      relations: {
        awardTypes: {
          name: 'awardTypes',
          type: 'AwardTypes',
          model: 'AwardTypes'
        },
        nominationTypes: {
          name: 'nominationTypes',
          type: 'NominationTypes[]',
          model: 'NominationTypes'
        },
      }
    }
  }
}
