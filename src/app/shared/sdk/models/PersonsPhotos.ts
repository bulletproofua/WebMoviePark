/* tslint:disable */
import {
  Persons,
  Photos
} from '../index';

declare var Object: any;
export interface PersonsPhotosInterface {
  "PersonPhotoId": number;
  "PersonId": number;
  "PhotoId": number;
  persons?: Persons;
  photos?: Photos;
}

export class PersonsPhotos implements PersonsPhotosInterface {
  "PersonPhotoId": number;
  "PersonId": number;
  "PhotoId": number;
  persons: Persons;
  photos: Photos;
  constructor(data?: PersonsPhotosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PersonsPhotos`.
   */
  public static getModelName() {
    return "PersonsPhotos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PersonsPhotos for dynamic purposes.
  **/
  public static factory(data: PersonsPhotosInterface): PersonsPhotos{
    return new PersonsPhotos(data);
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
      name: 'PersonsPhotos',
      plural: 'PersonsPhotos',
      path: 'PersonsPhotos',
      properties: {
        "PersonPhotoId": {
          name: 'PersonPhotoId',
          type: 'number'
        },
        "PersonId": {
          name: 'PersonId',
          type: 'number'
        },
        "PhotoId": {
          name: 'PhotoId',
          type: 'number'
        },
      },
      relations: {
        persons: {
          name: 'persons',
          type: 'Persons',
          model: 'Persons'
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
