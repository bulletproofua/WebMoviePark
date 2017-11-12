/* tslint:disable */

declare var Object: any;
export interface CollaborativeFilteringInterface {
  "id"?: number;
}

export class CollaborativeFiltering implements CollaborativeFilteringInterface {
  "id": number;
  constructor(data?: CollaborativeFilteringInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CollaborativeFiltering`.
   */
  public static getModelName() {
    return "CollaborativeFiltering";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CollaborativeFiltering for dynamic purposes.
  **/
  public static factory(data: CollaborativeFilteringInterface): CollaborativeFiltering{
    return new CollaborativeFiltering(data);
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
      name: 'CollaborativeFiltering',
      plural: 'CollaborativeFilterings',
      path: 'CollaborativeFilterings',
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
