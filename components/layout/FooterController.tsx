import React from "react";

// Styling
import hfStyle from "@styles/globalModules/fh.module.css";

const FooterController = () => {
  return (
    <footer>
      <div className={`${hfStyle.copyrightbar}`}>
        © {new Date().getFullYear()} | Site created by
        <a
          href="https://plitzinc.com?ref=plitzone"
          target="_blank"
          className={hfStyle.crlink}
        >
          Plitz7, a Plitz Corporation brand
        </a>
      </div>
    </footer>
  );
};

export default FooterController;
