import { ActionUnion, createAction } from '@common/helpers/ActionHelper';
import { InitTypes } from '@common/redux/Init/InitTypes';
import { IInitModelDTO } from '@common/models/Init/InitModel';

export const InitAction = {
  init: () => createAction(InitTypes.INIT),
  initSuccess: (data: IInitModelDTO) => createAction(InitTypes.INIT_SUCCESS, data),
  initFailure: () => createAction(InitTypes.INIT_FAILURE)
};

export type InitActionUnion = ActionUnion<typeof InitAction>;
