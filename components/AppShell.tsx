'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { PageNavigator } from './PageNavigator';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-1000">
      <div className="term-backdrop" aria-hidden="true" />
      <Navigation />
      <main id="main-content" className="flex-grow">{children}</main>
      <PageNavigator />
      <Footer />
    </div>
  );
};
