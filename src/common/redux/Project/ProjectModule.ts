import { ISagaModule } from 'redux-dynamic-modules-saga';
import { IProjectOwnState } from '@common/redux/Project/ProjectInterface';
import ProjectReducer from '@common/redux/Project/ProjectReducer';
import projectSaga from '@common/redux/Project/ProjectSaga';

const ProjectModule: ISagaModule<IProjectOwnState> = {
  id: 'project',
  reducerMap: {
    project: ProjectReducer
  } as any,
  sagas: [projectSaga]
};

export default ProjectModule;
