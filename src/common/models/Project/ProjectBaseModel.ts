import BaseModel, { IBaseModel, IBaseModelDTO } from '@common/models/BaseModel';
import ProjectModel, { IProjectModel, IProjectModelDTO } from '@common/models/Project/ProjectModel';
import { IHttpResponse } from '@common/interfaces/HttpInterface';
import { apiRequest } from '@common/services/ApiService';

const apiUrl = '/project';

export interface IProjectBaseModelDTO extends IBaseModelDTO {
  project: IProjectModelDTO;
}

export interface IProjectBaseModel extends IBaseModel {
  project: IProjectModel;
}

class ProjectBaseModel extends BaseModel implements IProjectBaseModel {
  constructor(public id: string, public project: IProjectModel) {
    super(id);
  }

  static build = (dto: IProjectBaseModelDTO): IProjectBaseModel =>
    new ProjectBaseModel(dto.id, ProjectModel.build(dto.project));

  static fetchProject = (id: string): Promise<IHttpResponse<IProjectBaseModelDTO>> =>
    apiRequest.get(ProjectBaseModel.buildFetchUrl({ url: apiUrl, id }));
}

export default ProjectBaseModel;
