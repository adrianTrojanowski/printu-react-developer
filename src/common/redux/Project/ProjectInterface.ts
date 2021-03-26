import { IProjectBaseModel } from '@common/models/Project/ProjectBaseModel';

export interface IProjectOwnState {
  project: IProjectState;
}

export interface IProjectState {
  data: IProjectBaseModel;
  isLoading: boolean;
  isLoaded: boolean;
  errorMessage?: string;
}
