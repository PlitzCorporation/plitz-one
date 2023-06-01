import Link from 'next/link';
import React from 'react';

import singlePage from '@styles/globalModules/singlePage.module.css';
// Styling
import allPages from '@styles/pagesModules/allPages.module.css';

// Components
import Skeleton from '@components/Skeleton';

type PagesTitlingProps = {
  loading?: boolean;
  title: string;
  subtitle: string;
  pageIntro?: string;
  buttons: ButtonTypes[];
};

interface ButtonTypes {
  link: string;
  label: string;
  type: string;
  external: boolean;
}

const PagesTitling = (props: PagesTitlingProps) => {
  const { loading } = props;

  return (
    <section className={allPages.heroSection}>
      <div className={allPages.heroWrapper}>
        <h1 className={singlePage.pageTitle}>
          {loading ? <Skeleton style={{ width: '100%' }} /> : props.title}
        </h1>

        <h3 className={singlePage.subTitle}>
          {loading ? <Skeleton style={{ width: '100%' }} /> : props.subtitle}
        </h3>
        {loading ? (
          <Skeleton style={{ width: '100%' }} />
        ) : (
          <p>{props.pageIntro}</p>
        )}
        <div className={singlePage.spButtonsWrapper}>
          {loading ? (
            <Skeleton style={{ width: '100%' }} />
          ) : (
            props.buttons.map((button, index) =>
              button.external ? (
                <a
                  key={index}
                  className={button.type}
                  href={button.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  role='link'
                >
                  {button.label}
                </a>
              ) : (
                <Link
                  key={index}
                  href={button.link}
                  className={button.type}
                  role='link'
                >
                  {button.label}
                </Link>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PagesTitling;
