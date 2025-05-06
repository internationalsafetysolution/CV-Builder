import { Fragment, useState, SyntheticEvent } from 'react';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import Achievements from './components/Achievements';

export interface IActivityTab {
  key: string;
  label: string;
  component: () => JSX.Element;
}

export interface IAllActivityTabs {
  [key: string]: IActivityTab;
}

// Remove the 'involvements' tab and component
const allActivityTabs: IAllActivityTabs = {
  achievements: {
    key: 'achievements',
    label: 'Certificates',
    component: Achievements,
  },
};

const ActivitiesLayout = () => {
  // Set 'achievements' as the default active tab
  const [activeTab, setActiveTab] = useState(allActivityTabs['achievements']);

  const changeActiveTab = (event: SyntheticEvent, key: string) => {
    const selectedTab = allActivityTabs[key];
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  };

  return (
    <Fragment>
      <BasicHeader activeTab={activeTab} changeActiveTab={changeActiveTab} tabs={allActivityTabs} />
      <BasicPanel activeTab={activeTab} />
    </Fragment>
  );
};

export default ActivitiesLayout;
