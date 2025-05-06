import React from 'react';

// Explicitly define the type for 'data' as string
interface AchievementsProps {
  data: string;
}

export const Achievements: React.FC<AchievementsProps> = ({ data }) => (
  <div className="achievements mt-4">
    <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-300 pb-2">
      Certifications
    </h3>
    <ul className="space-y-2">
      <div className="achievements-list" dangerouslySetInnerHTML={{ __html: data }} />
    </ul>
  </div>
);
