/* tslint:disable */
import {
  Movies,
  IdentityUsers
} from '../index';

declare var Object: any;
export interface UsersMoviesInterface {
  "UserMovieId"?: number;
  "UserId": number;
  "MovieId": number;
  "Rating": number;
  movies?: Movies;
  identityUsers?: IdentityUsers;
}

export class UsersMovies implements UsersMoviesInterface {
  "UserMovieId": number;
  "UserId": number;
  "MovieId": number;
  "Rating": number;
  movies: Movies;
  identityUsers: IdentityUsers;
  constructor(data?: UsersMoviesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UsersMovies`.
   */
  public static getModelName() {
    return "UsersMovies";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UsersMovies for dynamic purposes.
  **/
  public static factory(data: UsersMoviesInterface): UsersMovies{
    return new UsersMovies(data);
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
      name: 'UsersMovies',
      plural: 'UsersMovies',
      path: 'UsersMovies',
      properties: {
        "UserMovieId": {
          name: 'UserMovieId',
          type: 'number'
        },
        "UserId": {
          name: 'UserId',
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
        identityUsers: {
          name: 'identityUsers',
          type: 'IdentityUsers',
          model: 'IdentityUsers'
        },
      }
    }
  }
}
