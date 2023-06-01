import { SectionOneProps } from '@pages/about-this-template';

import aboutStyles from '@styles/aboutModules/index.module.css';

const SectionOne = (props: SectionOneProps) => {
  return (
    <section>
      <div className={aboutStyles.blockContainer}>
        <h2>{props.header}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
      </div>
    </section>
  );
};

export default SectionOne;
