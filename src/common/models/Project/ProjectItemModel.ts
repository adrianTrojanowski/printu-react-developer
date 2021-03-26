import BaseModel, { IBaseModel, IBaseModelDTO } from '@common/models/BaseModel';

export interface IProjectItemModelDTO extends IBaseModelDTO {
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IProjectItemModel extends IBaseModel {
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

class ProjectItemModel extends BaseModel implements IProjectItemModel {
  constructor(
    public id: string,
    public color: string,
    public rotation: number,
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    super(id);
  }

  static build = (dto: IProjectItemModelDTO): IProjectItemModel =>
    new ProjectItemModel(dto.id, dto.color, dto.rotation, dto.x, dto.y, dto.width, dto.height);
}

export default ProjectItemModel;
