import { IInitModel } from '@common/models/Init/InitModel';

export interface IInitOwnState {
  init: IInitState;
}

export interface IInitState {
  data: IInitModel;
  isLoading: boolean;
  isLoaded: boolean;
}
