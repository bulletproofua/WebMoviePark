/* tslint:disable */
import {
  Movies,
  ExternalServices
} from '../index';

declare var Object: any;
export interface ExternalServicesRatingsInterface {
  "ExternalServiceRatingId": number;
  "ExternalServiceId": number;
  "MovieId": number;
  "Rating": number;
  movies?: Movies;
  externalServices?: ExternalServices;
}

export class ExternalServicesRatings implements ExternalServicesRatingsInterface {
  "ExternalServiceRatingId": number;
  "ExternalServiceId": number;
  "MovieId": number;
  "Rating": number;
  movies: Movies;
  externalServices: ExternalServices;
  constructor(data?: ExternalServicesRatingsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExternalServicesRatings`.
   */
  public static getModelName() {
    return "ExternalServicesRatings";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExternalServicesRatings for dynamic purposes.
  **/
  public static factory(data: ExternalServicesRatingsInterface): ExternalServicesRatings{
    return new ExternalServicesRatings(data);
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
      name: 'ExternalServicesRatings',
      plural: 'ExternalServicesRatings',
      path: 'ExternalServicesRatings',
      properties: {
        "ExternalServiceRatingId": {
          name: 'ExternalServiceRatingId',
          type: 'number'
        },
        "ExternalServiceId": {
          name: 'ExternalServiceId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "Rating": {
          name: 'Rating',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
          model: 'Movies'
        },
        externalServices: {
          name: 'externalServices',
          type: 'ExternalServices',
          model: 'ExternalServices'
        },
      }
    }
  }
}
