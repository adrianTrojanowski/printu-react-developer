import { call, put, takeLatest } from 'redux-saga/effects';
import { IHttpResponse } from '@common/interfaces/HttpInterface';
import InitModel from '@common/models/Init/InitModel';
import { InitTypes } from '@common/redux/Init/InitTypes';
import { InitAction } from '@common/redux/Init/InitActions';
import { ProjectAction } from '@common/redux/Project/ProjectActions';

function* handleInit() {
  try {
    const response: IHttpResponse<InitModel> = yield call(InitModel.fetchInit);
    yield put(InitAction.initSuccess(response.data));
    yield put(ProjectAction.project(response.data.id));
  } catch (error) {
    yield put(InitAction.initFailure());
  }
}

export default function* initSaga() {
  yield takeLatest(InitTypes.INIT, handleInit);
}
