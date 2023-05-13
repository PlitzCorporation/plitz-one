import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

// Styling
import singlePage from '@styles/globalModules/singlePage.module.css';

// Parts
import Seo from '@components/Seo';

// TypeScript
interface HomePageProps {
  title: string;
  subtitle: string;
  pageContent: string;
  buttons: ButtonTypes[];
}

interface ButtonTypes {
  link: string;
  label: string;
  type: string;
  external: boolean;
}

const HomePage = (props: HomePageProps) => {
  return (
    <Fragment>
      <Seo />

      <section>
        <div className={singlePage.wrapperUnderConstruction}>
          <h1 className={singlePage.pageTitle}>{props.title}</h1>
          <h2 className={singlePage.subTitle}>{props.subtitle}</h2>
          <p>{props.pageContent}</p>
          <div className={singlePage.spButtonsWrapper}>
            {props.buttons.map((button, index) => (
              <a
                key={index}
                className={button.type}
                href={button.link}
                target={button.external ? '_blank' : undefined}
                rel={button.external ? 'noopener noreferrer' : undefined}
                role='link'
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    title: 'NEXT.js + TypeScript + Material UI Starting Pack',
    subtitle: 'A Boilerplate by Plitz7',
    pageContent: `A starter for NEXT.js, Material UI, and TypeScript with Absolute
    Import, Seo, Link component, pre-configured with Husky. This
    boilerplate has been created by the Plitz7 team for your initial dev
    convenience.`,
    buttons: [
      {
        link: 'https://plitz7.com',
        label: 'Hire Plitz7',
        type: 'primary-button',
        external: true,
      },
      {
        link: 'https://github.com/PlitzCorporation',
        label: 'GitHub Page',
        type: 'outlined-button',
        external: true,
      },
    ],
  };

  return {
    props: data,
  };
};
