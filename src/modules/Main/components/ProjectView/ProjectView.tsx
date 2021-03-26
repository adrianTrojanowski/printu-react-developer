import * as React from 'react';
import { useSelector } from 'react-redux';
import { IInitOwnState } from '@common/redux/Init/InitInterfaces';
import { IProjectOwnState } from '@common/redux/Project/ProjectInterface';
import styles from './ProjectView.module.less';
import ProjectViewInfo from '@modules/Main/components/ProjectView/components/ProjectViewInfo';
import ProjectViewContent from '@modules/Main/components/ProjectView/components/ProjectViewContent';

const ProjectView = (): React.ReactElement => {
    const isLoading = useSelector(
        ({ init, project }: IInitOwnState & IProjectOwnState) => init.isLoading || project.isLoading
    );

    const isLoaded = useSelector(({ project }: IProjectOwnState) => project.isLoaded);

    const project = useSelector(({ project }: IProjectOwnState) => project.data);
    const errorMessage = useSelector(({ project }: IProjectOwnState) => project.errorMessage);

    return (
        <>
            {!isLoading && (isLoaded || errorMessage) && (
                <ProjectViewInfo project={project.project} errorMessage={errorMessage} />
            )}

            <div className={styles.ProjectViewContent}>
                {isLoading ? (
                    <span>&#8987; loading</span>
                ) : isLoaded ? (
                    <ProjectViewContent project={project.project} />
                ) : (
                    <span>Empty</span>
                )}
            </div>
        </>
    );
};

export default ProjectView;
