export interface IActivity {
  achievements: string;
}

export interface IActivityStore {
  activities: IActivity;
  reset: (activityItem: IActivity) => void;
  get: () => void;
  updateAchievements: (achievements: string) => void;
}
