import * as React from 'react';

// Parts
import FooterController from '@components/layout/FooterController';
import HeaderController from '@components/layout/HeaderController';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <HeaderController />
      <main role='main'>{children}</main>
      <FooterController />
    </>
  );
}
