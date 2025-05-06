import React from 'react';

type NavBarActionsProps = {
  children: React.ReactNode;
  className?: string;
};

export const NavBarActions = ({ children, className = '' }: NavBarActionsProps) => {
  return <div className={`flex gap-3 items-center ${className}`}>{children}</div>;
};
