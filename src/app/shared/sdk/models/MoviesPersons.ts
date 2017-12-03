/* tslint:disable */
import {
  Movies,
  CrewRole,
  Persons
} from '../index';

declare var Object: any;
export interface MoviesPersonsInterface {
  "MoviePersonId"?: number;
  "MovieId": number;
  "PersonId": number;
  "CrewRoleId"?: number;
  "MoviePersonCharacter"?: string;
  "MoviesId"?: number;
  movies?: Movies;
  crewRoles?: CrewRole;
  persons?: Persons;
}

export class MoviesPersons implements MoviesPersonsInterface {
  "MoviePersonId": number;
  "MovieId": number;
  "PersonId": number;
  "CrewRoleId": number;
  "MoviePersonCharacter": string;
  "MoviesId": number;
  movies: Movies;
  crewRoles: CrewRole;
  persons: Persons;
  constructor(data?: MoviesPersonsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MoviesPersons`.
   */
  public static getModelName() {
    return "MoviesPersons";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MoviesPersons for dynamic purposes.
  **/
  public static factory(data: MoviesPersonsInterface): MoviesPersons{
    return new MoviesPersons(data);
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
      name: 'MoviesPersons',
      plural: 'MoviesPersons',
      path: 'MoviesPersons',
      properties: {
        "MoviePersonId": {
          name: 'MoviePersonId',
          type: 'number'
        },
        "MovieId": {
          name: 'MovieId',
          type: 'number'
        },
        "PersonId": {
          name: 'PersonId',
          type: 'number'
        },
        "CrewRoleId": {
          name: 'CrewRoleId',
          type: 'number'
        },
        "MoviePersonCharacter": {
          name: 'MoviePersonCharacter',
          type: 'string'
        },
        "MoviesId": {
          name: 'MoviesId',
          type: 'number'
        },
      },
      relations: {
        movies: {
          name: 'movies',
          type: 'Movies',
          model: 'Movies'
        },
        crewRoles: {
          name: 'crewRoles',
          type: 'CrewRole',
          model: 'CrewRole'
        },
        persons: {
          name: 'persons',
          type: 'Persons',
          model: 'Persons'
        },
      }
    }
  }
}
