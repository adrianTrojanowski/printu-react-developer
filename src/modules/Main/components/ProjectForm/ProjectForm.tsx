import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IInitOwnState } from '@common/redux/Init/InitInterfaces';
import { IProjectOwnState } from '@common/redux/Project/ProjectInterface';
import { InitAction } from '@common/redux/Init/InitActions';
import { ProjectAction } from '@common/redux/Project/ProjectActions';

const ProjectForm = (): React.ReactElement => {
  const [projectId, setProjectId] = React.useState<string>('');

  const dispatch = useDispatch();
  const isLoading = useSelector(
    ({ init, project }: IInitOwnState & IProjectOwnState) => init.isLoading || project.isLoading
  );

  const onProjectIdChange = (value: string) => {
    setProjectId(value);
  };

  const onSubmit = () => {
    if (projectId === '') {
      dispatch(InitAction.init());
    } else {
      dispatch(ProjectAction.project(projectId));
    }

    setProjectId('');
  };

  return (
    <div>
      <span>ProjectID:</span>
      <input
        type="text"
        placeholder="For random leave empty"
        value={projectId}
        onChange={(e) => onProjectIdChange(e.target.value)}
      />
      <button onClick={() => onSubmit()} disabled={isLoading}>
        Fetch
      </button>
    </div>
  );
};

export default ProjectForm;
