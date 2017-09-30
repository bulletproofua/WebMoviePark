/* tslint:disable */

declare var Object: any;
export interface AprioriAlgorithmInterface {
  "id"?: number;
}

export class AprioriAlgorithm implements AprioriAlgorithmInterface {
  "id": number;
  constructor(data?: AprioriAlgorithmInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AprioriAlgorithm`.
   */
  public static getModelName() {
    return "AprioriAlgorithm";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AprioriAlgorithm for dynamic purposes.
  **/
  public static factory(data: AprioriAlgorithmInterface): AprioriAlgorithm{
    return new AprioriAlgorithm(data);
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
      name: 'AprioriAlgorithm',
      plural: 'AprioriAlgorithms',
      path: 'AprioriAlgorithms',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
