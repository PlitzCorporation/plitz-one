import Link from 'next/link';
import { Fragment } from 'react';
// Icons
import { RiAlarmWarningFill } from 'react-icons/ri';

import singlePage from '@styles/globalModules/singlePage.module.css';

// Components
import Seo from '@components/Seo';

const NotFoundPage = () => {
  return (
    <Fragment>
      <Seo templateTitle='Not Found' />

      <section>
        <div className={singlePage.wrapperUnderConstruction}>
          <RiAlarmWarningFill size={60} />
          <h1 className={singlePage.pageTitle}>404</h1>
          <h3>Page Not Found</h3>
          <p>
            Ooops, it's not you, it's us. The page you are looking for doesn't
            exists or has been removed.
          </p>
          <div className={singlePage.spButtonsWrapper}>
            <Link href='/' className='secondary-button'>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFoundPage;
