import { GetServerSideProps } from 'next';
import { Fragment, useEffect, useState } from 'react';

import SectionOne from '@components/AboutComponents/SectionOne';
import PagesTitling from '@components/layout/PagesTitling';
// Parts
import Seo from '@components/Seo';

// TypeScript
export interface AboutTemplateProps {
  title: string;
  subtitle: string;
  pageIntro: string;
  buttons: ButtonTypes[];
  sectionOne: SectionOneProps;
}

export interface ButtonTypes {
  link: string;
  label: string;
  type: string;
  external: boolean;
}

export interface SectionOneProps {
  header: string;
  body: string;
}

const AboutTemplate = (props: AboutTemplateProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This timeout is to show the loading skeleton effect only.
    // You can use this for when the data change from the request
    setTimeout(() => {
      props.title && setLoading(false);
    }, 500);
  }, [props.title]);

  return (
    <Fragment>
      <Seo />

      <PagesTitling {...props} loading={loading} />
      <SectionOne {...props.sectionOne} />
    </Fragment>
  );
};

export default AboutTemplate;

export const getServerSideProps: GetServerSideProps = async () => {
  // You can replace this with an API call
  const data = {
    title: 'About This Template',
    subtitle: 'An easey way to start developing with NEXT.js and TypeScript',
    pageIntro: `Thanks for using this NEXT.js starter template. We are glad we can give you an easy way to start your new projects.`,
    buttons: [
      {
        link: 'https://plitz7.com',
        label: 'Hire Plitz7',
        type: 'primary-button',
        external: true,
      },
      {
        link: '/',
        label: 'Back Home',
        type: 'outlined-button',
        external: false,
      },
    ],
    sectionOne: {
      header: 'Why NEXT.js and CSS',
      body: '<p>Many developers are using Tailwind, but we have seen that many are using it without mastering CSS first, and this can be a major setback when complex styling are needed. If you feel like your knowledge of CSS is advanced already, you can choose to setup Tailwind instead, but we recommend you practice CSS with this template.</p><p>Connect with us using our social networks or github and leave a comment if you think you would prefer this template with a Tailwidn setup instead.</p>',
    },
  };

  return {
    props: data,
  };
};
