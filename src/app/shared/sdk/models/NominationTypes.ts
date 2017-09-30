/* tslint:disable */
import {
  Awards
} from '../index';

declare var Object: any;
export interface NominationTypesInterface {
  "NominationTypeId": number;
  "NominationType": string;
  awards?: Awards[];
}

export class NominationTypes implements NominationTypesInterface {
  "NominationTypeId": number;
  "NominationType": string;
  awards: Awards[];
  constructor(data?: NominationTypesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NominationTypes`.
   */
  public static getModelName() {
    return "NominationTypes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NominationTypes for dynamic purposes.
  **/
  public static factory(data: NominationTypesInterface): NominationTypes{
    return new NominationTypes(data);
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
      name: 'NominationTypes',
      plural: 'NominationTypes',
      path: 'NominationTypes',
      properties: {
        "NominationTypeId": {
          name: 'NominationTypeId',
          type: 'number'
        },
        "NominationType": {
          name: 'NominationType',
          type: 'string'
        },
      },
      relations: {
        awards: {
          name: 'awards',
          type: 'Awards[]',
          model: 'Awards'
        },
      }
    }
  }
}
