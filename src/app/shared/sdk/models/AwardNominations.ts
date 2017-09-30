/* tslint:disable */
import {
  Awards,
  NominationTypes
} from '../index';

declare var Object: any;
export interface AwardNominationsInterface {
  "AwardNominationId": number;
  "AwardId": number;
  "NominationTypeId": number;
  awards?: Awards;
  nominationTypes?: NominationTypes;
}

export class AwardNominations implements AwardNominationsInterface {
  "AwardNominationId": number;
  "AwardId": number;
  "NominationTypeId": number;
  awards: Awards;
  nominationTypes: NominationTypes;
  constructor(data?: AwardNominationsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AwardNominations`.
   */
  public static getModelName() {
    return "AwardNominations";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AwardNominations for dynamic purposes.
  **/
  public static factory(data: AwardNominationsInterface): AwardNominations{
    return new AwardNominations(data);
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
      name: 'AwardNominations',
      plural: 'AwardNominations',
      path: 'AwardNominations',
      properties: {
        "AwardNominationId": {
          name: 'AwardNominationId',
          type: 'number'
        },
        "AwardId": {
          name: 'AwardId',
          type: 'number'
        },
        "NominationTypeId": {
          name: 'NominationTypeId',
          type: 'number'
        },
      },
      relations: {
        awards: {
          name: 'awards',
          type: 'Awards',
          model: 'Awards'
        },
        nominationTypes: {
          name: 'nominationTypes',
          type: 'NominationTypes',
          model: 'NominationTypes'
        },
      }
    }
  }
}
