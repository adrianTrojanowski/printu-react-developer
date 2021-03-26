import InitReducer from '@common/redux/Init/InitReducer';
import { IInitOwnState } from '@common/redux/Init/InitInterfaces';
import initSaga from '@common/redux/Init/InitSaga';
import { ISagaModule } from 'redux-dynamic-modules-saga';

export const InitModule: ISagaModule<IInitOwnState> = {
  id: 'init',
  reducerMap: {
    init: InitReducer
  },
  sagas: [initSaga]
};

export default InitModule;
