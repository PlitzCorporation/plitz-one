import * as React from "react";

import singlePage from "@styles/globalModules/singlePage.module.css";

// Parts
import Seo from "@components/Seo";

const HomePage = () => {
  return (
    <>
      <Seo />

      <section>
        <div className={singlePage.wrapperUnderConstruction}>
          <h1 className={singlePage.pageTitle}>
            NEXT.js + TypeScript + Material UI Starting Pack
          </h1>
          <h2 className={singlePage.subTitle}>A Boilerplate by Plitz7</h2>
          <p>
            A starter for NEXT.js, Material UI, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky. This
            boilerplate has been created by the Plitz7 team.
          </p>
          <div className={singlePage.spButtonsWrapper}>
            <a className="primary-button" href="https://plitz7.com">
              Plitz7
            </a>

            <a
              className="outlined-button"
              href="https://github.com/PlitzCorporation"
            >
              GitHub Page
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
