import * as React from 'react';
import { IProjectModel } from '@common/models/Project/ProjectModel';
import ProjectViewContentItem from '@modules/Main/components/ProjectView/components/ProjectViewContent/components';

interface IProps {
  project: IProjectModel;
}

const ProjectViewContent = ({ project }: IProps) => {
  return (
    <svg width="100%" height="100%">
      <svg width="100%" height="100%" viewBox={`0 0 ${project.width} ${project.height}`}>
        <rect fill="#efefef" width="100%" height="100%" />
        {project.items.map((item) => (
          <ProjectViewContentItem item={item} key={item.id} />
        ))}
      </svg>
    </svg>
  );
};

export default ProjectViewContent;
