import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="137" cy="113" r="109" />
    <rect x="0" y="232" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="390" rx="10" ry="10" width="90" height="27" />
    <rect x="123" y="379" rx="27" ry="27" width="157" height="49" />
  </ContentLoader>
);

export default Skeleton;
