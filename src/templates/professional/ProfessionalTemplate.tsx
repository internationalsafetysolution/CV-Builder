import React, { useContext } from 'react';

import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import { Objective } from './components/Objective';
import RatedSkills from './components/RatedSkills';
import { Section } from './components/Section';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import UnratedSkills from './components/UnratedSkills';
import Work from './components/Work';
import styled from '@emotion/styled';
import { AwardSection } from '../modern/components/Awards';

const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;

  @media print {
    border: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 66%;
  row-gap: 20px;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 34%;
  row-gap: 20px;
  height: 100%;
  font-size: 12px;
`;

export default function ProfessionalTemplate() {
  const resumeData = useContext(StateContext);
  const skills = resumeData.skills;
  const achievements = resumeData.activities.achievements;

  return (
    <ResumeContainer>
      <LeftSection>
        <Section
          title={resumeData.basics?.name}
          profiles={resumeData.basics.profiles}
          portfolioUrl={resumeData.basics.url}
          titleClassname="text-xl font-medium"
        >
          <BasicIntro basics={resumeData.basics} />
        </Section>
        <SectionValidator value={resumeData.work}>
          <Section title="Work Experience">
            <Work work={resumeData.work} />
          </Section>
        </SectionValidator>

        <SectionValidator value={achievements}>
          <Section title="Certifications">
            <Achievements data={achievements} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.awards}>
          <Section title="Awards">
            <AwardSection awardsReceived={resumeData.awards} />
          </Section>
        </SectionValidator>
      </LeftSection>

      <RightSection>
        <SectionValidator value={resumeData.basics.summary}>
          <Section title="Summary">
            <AboutMe summary={resumeData.basics.summary} profileImage={resumeData.basics.image} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.basics.objective}>
          <Section title="Career Objective">
            <Objective objective={resumeData.basics.objective} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.languages}>
          <Section title="Languages">
            <RatedSkills items={skills.languages} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.technologies}>
          <Section title="Skills">
            <UnratedSkills items={skills.technologies} />
          </Section>
        </SectionValidator>
        <SectionValidator value={resumeData.education}>
          <Section title="Education">
            <Education education={resumeData.education} />
          </Section>
        </SectionValidator>
      </RightSection>
    </ResumeContainer>
  );
}
