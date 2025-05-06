/* eslint-disable prettier/prettier */
import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext, useEffect } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { Achievements } from './components/Achievements'; // Add this line

export default function ModernTemplate() {
  const resumeData = useContext(StateContext);

  // Log the achievements to see if the data is being fetched
  useEffect(() => {
    console.log('Achievements Data:', resumeData.achievements);
  }, [resumeData]);

  return (
    <div className="p-2">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
        profiles={resumeData.basics.profiles}
      />
      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </SectionValidator>

          <SectionValidator value={resumeData.work}>
            <WorkSection experience={resumeData.work} />
          </SectionValidator>

          <SectionValidator value={resumeData.awards}>
            <AwardSection awardsReceived={resumeData.awards} />
          </SectionValidator>

          <SectionValidator value={resumeData.certifications}>
            <Achievements data={resumeData.certifications} />
          </SectionValidator>
        </div>

        <div className="basis-[40%] p-3">
          <SectionValidator value={resumeData.skills.languages}>
            <SkillsSection title="Languages" list={resumeData.skills.languages} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.technologies}>
            <SkillsSection title="Skills" list={resumeData.skills.technologies} />
          </SectionValidator>

          <SectionValidator value={resumeData.education}>
            <EducationSection education={resumeData.education} />
          </SectionValidator>

          <SectionValidator value={resumeData.activities?.achievements}>
            <Achievements data={resumeData.activities?.achievements} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
