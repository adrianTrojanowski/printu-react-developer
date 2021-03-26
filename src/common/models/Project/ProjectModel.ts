import BaseModel, { IBaseModel, IBaseModelDTO } from '@common/models/BaseModel';
import ProjectItemModel, { IProjectItemModel, IProjectItemModelDTO } from '@common/models/Project/ProjectItemModel';

export interface IProjectModelDTO extends IBaseModelDTO {
  name: string;
  width: number;
  height: number;
  items: IProjectItemModelDTO[];
}

export interface IProjectModel extends IBaseModel {
  name: string;
  width: number;
  height: number;
  items: IProjectItemModel[];
}

class ProjectModel extends BaseModel implements IProjectModel {
  constructor(
    public id: string,
    public name: string,
    public width: number,
    public height: number,
    public items: IProjectItemModel[]
  ) {
    super(id);
  }

  static build = (dto: IProjectModelDTO): IProjectModel =>
    new ProjectModel(
      dto.id,
      dto.name,
      dto.width,
      dto.height,
      dto.items.map((item) => ProjectItemModel.build(item))
    );
}

export default ProjectModel;
