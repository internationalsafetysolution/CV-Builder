import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import resumeData from '@/helpers/constants/resume-data.json';
import { IActivityStore, IActivity } from './activity.interface';
import { SetState } from './store.interface';

const setAllAwards = (set: SetState<IActivityStore>) => (activityItem: IActivity) => {
  set({
    activities: activityItem,
  });
};

const updateAchievements = (set: SetState<IActivityStore>) => (achievements: string) => {
  set(
    produce((state: IActivityStore) => {
      state.activities.achievements = achievements;
    })
  );
};

export const useActivity = create<IActivityStore>()(
  persist(
    (set, get) => ({
      activities: resumeData.activities,

      get: () => get().activities,
      reset: setAllAwards(set),
      updateAchievements: updateAchievements(set),
    }),
    { name: 'activities' }
  )
);
