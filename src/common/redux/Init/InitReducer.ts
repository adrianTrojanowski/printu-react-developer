import { IInitState } from '@common/redux/Init/InitInterfaces';
import { InitActionUnion } from '@common/redux/Init/InitActions';
import produce from 'immer';
import { InitTypes } from '@common/redux/Init/InitTypes';
import InitModel from '@common/models/Init/InitModel';

const initialState: IInitState = {
  data: {
    id: '',
    name: '',
    modified: 0
  },
  isLoading: false,
  isLoaded: false
};

function InitReducer(state = initialState, action: InitActionUnion): IInitState {
  return produce(state, (draft) => {
    switch (action.type) {
      case InitTypes.INIT: {
        draft.isLoading = true;
        break;
      }

      case InitTypes.INIT_SUCCESS: {
        draft.data = InitModel.build(action.payload);
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case InitTypes.INIT_FAILURE: {
        draft.isLoading = false;
      }
    }
  });
}

export default InitReducer;
