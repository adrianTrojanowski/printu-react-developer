import BaseModel, { IBaseModel, IBaseModelDTO } from '@common/models/BaseModel';
import { apiRequest } from '@common/services/ApiService';
import { IHttpResponse } from '@common/interfaces/HttpInterface';

const apiUrl = '/init';

export interface IInitModelDTO extends IBaseModelDTO {
  name: string;
  modified: number;
}

export interface IInitModel extends IBaseModel {
  name: string;
  modified: number;
}

class InitModel extends BaseModel implements IInitModel {
  constructor(public id: string, public name: string, public modified: number) {
    super(id);
  }

  static build = (dto: IInitModelDTO): IInitModel => new InitModel(dto.id, dto.name, dto.modified);

  static fetchInit = (): Promise<IHttpResponse<IInitModelDTO>> => apiRequest.get(apiUrl);
}

export default InitModel;
