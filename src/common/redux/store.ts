import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import InitModule from '@common/redux/Init';
import ProjectModule from '@common/redux/Project';

const store: IModuleStore<any> = createStore(
  {
    extensions: [getSagaExtension()]
  },
  InitModule,
  ProjectModule
);

export default store;
