/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Movies } from '../../models/Movies';
import { UsersMovies } from '../../models/UsersMovies';
import { ExternalServicesRatings } from '../../models/ExternalServicesRatings';
import { ExternalServices } from '../../models/ExternalServices';
import { MoviesGenres } from '../../models/MoviesGenres';
import { Genres } from '../../models/Genres';
import { MoviesCountries } from '../../models/MoviesCountries';
import { MoviesPersons } from '../../models/MoviesPersons';
import { CrewRole } from '../../models/CrewRole';
import { Countries } from '../../models/Countries';
import { Persons } from '../../models/Persons';
import { PersonsPhotos } from '../../models/PersonsPhotos';
import { Photos } from '../../models/Photos';
import { PhotosTypes } from '../../models/PhotosTypes';
import { AwardTypes } from '../../models/AwardTypes';
import { Awards } from '../../models/Awards';
import { AwardNominations } from '../../models/AwardNominations';
import { Roles } from '../../models/Roles';
import { NominationTypes } from '../../models/NominationTypes';
import { Nominees } from '../../models/Nominees';
import { IdentityUsers } from '../../models/IdentityUsers';
import { Users } from '../../models/Users';
import { Staff } from '../../models/Staff';
import { MoviesPhotos } from '../../models/MoviesPhotos';
import { AprioriAlgorithm } from '../../models/AprioriAlgorithm';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Movies: Movies,
    UsersMovies: UsersMovies,
    ExternalServicesRatings: ExternalServicesRatings,
    ExternalServices: ExternalServices,
    MoviesGenres: MoviesGenres,
    Genres: Genres,
    MoviesCountries: MoviesCountries,
    MoviesPersons: MoviesPersons,
    CrewRole: CrewRole,
    Countries: Countries,
    Persons: Persons,
    PersonsPhotos: PersonsPhotos,
    Photos: Photos,
    PhotosTypes: PhotosTypes,
    AwardTypes: AwardTypes,
    Awards: Awards,
    AwardNominations: AwardNominations,
    Roles: Roles,
    NominationTypes: NominationTypes,
    Nominees: Nominees,
    IdentityUsers: IdentityUsers,
    Users: Users,
    Staff: Staff,
    MoviesPhotos: MoviesPhotos,
    AprioriAlgorithm: AprioriAlgorithm,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
