import BasicLayout from '@/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from '@/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from '@/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from '@/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from '@/modules/builder/editor/modules/activities/ActivitiesLayout';
import AwardsLayout from '@/modules/builder/editor/modules/awards/AwardsLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  'skills-and-expertise': {
    title: 'Skills and Languages',
    component: SkillsLayout,
  },
  education: { title: 'Education', component: EducationLayout },
  experience: { title: 'Experience', component: ExperienceLayout },
  activities: { title: 'Certification', component: ActivitiesLayout },
  awards: { title: 'Awards', component: AwardsLayout },
};
