/* tslint:disable */
import {
  Movies,
  Photos
} from '../index';

declare var Object: any;
export interface MoviesPhotosInterface {
  "MoviesPhotosId": number;
  "MovieId": number;
  "PhotoId": number;
  movies?: Movies;
  photos?: Photos;
}

export class MoviesPhotos implements MoviesPhotosInterface {
  "MoviesPhotosId": number;
  "MovieId": number;
  "PhotoId": number;
  movies: Movies;
  photos: Photos;
  constructor(data?: MoviesPhotosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MoviesPhotos`.
   */
  public static getModelName() {
    return "MoviesPhotos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MoviesPhotos for dynamic purposes.
  **/
  public static factory(data: MoviesPhotosInterface): MoviesPhotos{
    return new MoviesPhotos(data);
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
      name: 'MoviesPhotos',
      plural: 'MoviesPhotos',
      path: 'MoviesPhotos',
      properties: {
        "MoviesPhotosId": {
          name: 'MoviesPhotosId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "PhotoId": {
          name: 'PhotoId',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
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
