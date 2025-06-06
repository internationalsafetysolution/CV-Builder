import { IItem } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { useRef } from 'react';
import { useLanguages, useTechnologies } from '../../../stores/skills';
import { scrollToElement } from '../../../helpers/utils/index';

export const SkillsSection = ({ title, list }: { title: string; list: IItem[] }) => {
  const skillRef = useRef<null | HTMLDivElement>(null);

  // Subscribe only to the remaining relevant hooks (languages and technologies)
  useLanguages.subscribe(() => {
    scrollToElement(skillRef);
  });

  useTechnologies.subscribe(() => {
    scrollToElement(skillRef);
  });

  return (
    <div className="my-3" ref={skillRef}>
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: IItem, index) => (
          <div
            key={index}
            className="py-1 px-2 text-sm font-medium border-b-2 border-color-[##a9a9a9]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
