import { ActionUnion, createAction } from '@common/helpers/ActionHelper';
import { ProjectTypes } from '@common/redux/Project/ProjectTypes';
import { IProjectBaseModelDTO } from '@common/models/Project/ProjectBaseModel';

export const ProjectAction = {
  project: (id: string) => createAction(ProjectTypes.PROJECT, { id }),
  projectSuccess: (data: IProjectBaseModelDTO) => createAction(ProjectTypes.PROJECT_SUCCESS, data),
  projectFailure: (errorMessage: string) => createAction(ProjectTypes.PROJECT_FAILURE, errorMessage)
};

export type ProjectActionUnion = ActionUnion<typeof ProjectAction>;
