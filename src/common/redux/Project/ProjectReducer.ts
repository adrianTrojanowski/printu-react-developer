import { IProjectState } from '@common/redux/Project/ProjectInterface';
import { ProjectActionUnion } from '@common/redux/Project/ProjectActions';
import produce from 'immer';
import { ProjectTypes } from '@common/redux/Project/ProjectTypes';
import ProjectBaseModel from '@common/models/Project/ProjectBaseModel';

const initialSate: IProjectState = {
  data: {
    id: '',
    project: {
      id: '',
      name: '',
      width: 0,
      height: 0,
      items: []
    }
  },
  isLoading: false,
  isLoaded: false
};

function ProjectReducer(state = initialSate, action: ProjectActionUnion): IProjectState {
  return produce(state, (draft) => {
    switch (action.type) {
      case ProjectTypes.PROJECT: {
        draft.isLoading = true;
        draft.isLoaded = false;
        draft.errorMessage = undefined;
        break;
      }

      case ProjectTypes.PROJECT_SUCCESS: {
        draft.data = ProjectBaseModel.build(action.payload);
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case ProjectTypes.PROJECT_FAILURE: {
        console.log(action.payload);
        draft.isLoading = false;
        draft.errorMessage = action.payload;
      }
    }
  });
}

export default ProjectReducer;
