import React from 'react';

// Styling
import hfStyle from '@styles/globalModules/fh.module.css';

const FooterController = () => {
  return (
    <footer>
      <div className={`${hfStyle.copyrightbar}`}>
        © {new Date().getFullYear()} | Created by
        <a
          href='https://plitzinc.com?ref=plitzone'
          target='_blank'
          className={hfStyle.crlink}
        >
          Plitz Corporation
        </a>
      </div>
    </footer>
  );
};

export default FooterController;
