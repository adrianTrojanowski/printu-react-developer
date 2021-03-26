import * as React from 'react';
import ProjectForm from '@modules/Main/components/ProjectForm';
import ProjectView from '@modules/Main/components/ProjectView/ProjectView';
import styles from './Main.module.less';

const Main = (): React.ReactElement => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainContent}>
        <ProjectForm />
        <ProjectView />
      </div>
    </div>
  );
};

export default Main;
