import { useLanguages, useTechnologies } from '@/stores/skills'; // Removed the unused imports
import ResumeData from '@/helpers/constants/resume-data.json';
import { useActivity } from './activity';
import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    skills: {
      languages: useLanguages((state) => state.values),
      technologies: useTechnologies((state) => state.values),
    },
    activities: useActivity((state) => state.get()),
  };
};

/**
 * @description Reset all the stores
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useTechnologies.getState().reset(ResumeData.skills.technologies);
  useExperiences.getState().reset(ResumeData.work);
  useEducations.getState().reset(ResumeData.education);
  useAwards.getState().reset(ResumeData.awards);
  useActivity.getState().reset(ResumeData.activities);
};
