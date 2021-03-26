import { call, put, takeLatest } from 'redux-saga/effects';
import { IHttpResponse } from '@common/interfaces/HttpInterface';
import ProjectBaseModel, { IProjectBaseModelDTO } from '@common/models/Project/ProjectBaseModel';
import { ProjectAction } from '@common/redux/Project/ProjectActions';
import { ActionWithPayload } from '@common/helpers/ActionHelper';
import { ProjectTypes } from '@common/redux/Project/ProjectTypes';

function* handleProject(action: ActionWithPayload<string, { id: string }>) {
  try {
    const response: IHttpResponse<IProjectBaseModelDTO> = yield call(ProjectBaseModel.fetchProject, action.payload.id);
    yield put(ProjectAction.projectSuccess(response.data));
  } catch (error) {
    const errorMessage = (error: any) => {
      switch (error.response.status) {
        case 500: {
          if (error.response.data.error === 1) {
            return error.response.data.message;
          }

          return `Ups... cos poszlo nie tak. Blad - 500`;
        }
        case 404: {
          return `Ups... cos poszlo nie tak. Blad - 404`;
        }

        default:
          return 'Ups... cos poszlo nie tak.';
      }
    };

    yield put(ProjectAction.projectFailure(errorMessage(error)));
  }
}

export default function* projectSaga() {
  yield takeLatest(ProjectTypes.PROJECT, handleProject);
}
