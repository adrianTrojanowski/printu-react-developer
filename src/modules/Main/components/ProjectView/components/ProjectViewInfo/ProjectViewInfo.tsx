import * as React from 'react';
import { IProjectModel } from '@common/models/Project/ProjectModel';

interface IProps {
  project: IProjectModel;
  errorMessage?: string;
}

const ProjectViewInfo = ({ project, errorMessage }: IProps): React.ReactElement =>
  errorMessage ? (
    <span>🐛{errorMessage}</span>
  ) : (
    <div>
      <hr />
      <div>
        Name: <b>{project.name}</b>
      </div>
      <div>
        ID: <input type="text" value={project.id} readOnly />
      </div>
    </div>
  );

export default ProjectViewInfo;
