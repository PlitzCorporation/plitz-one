import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

// Styling
import singlePage from '@styles/globalModules/singlePage.module.css';
import allPages from '@styles/pagesModules/allPages.module.css';

// Parts
import Seo from '@components/Seo';

// TypeScript
interface AboutTemplateProps {
  title: string;
  subtitle: string;
  pageIntro: string;
  buttons: ButtonTypes[];
}

interface ButtonTypes {
  link: string;
  label: string;
  type: string;
  external: boolean;
}

const AboutTemplate = (props: AboutTemplateProps) => {
  return (
    <Fragment>
      <Seo />

      <section className={allPages.heroSection}>
        <div className={allPages.heroWrapper}>
          <h1 className={singlePage.pageTitle}>{props.title}</h1>
          <h3 className={singlePage.subTitle}>{props.subtitle}</h3>
          <p>{props.pageIntro}</p>
          <div className={singlePage.spButtonsWrapper}>
            {props.buttons.map((button, index) =>
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
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutTemplate;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    title: 'About This Template',
    subtitle: 'Read about this template and why Plitz7 created it for you',
    pageIntro: `Thanks for using this boilerplate for your projects. We are glad we can give you an easy wayt to start your new projects.`,
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
  };

  return {
    props: data,
  };
};
