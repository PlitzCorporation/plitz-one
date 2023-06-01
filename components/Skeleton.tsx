import * as React from 'react';

import clsxm from '@lib/clsxm';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return <div className={clsxm('shimmer-animation', className)} {...rest} />;
};

export default Skeleton;
