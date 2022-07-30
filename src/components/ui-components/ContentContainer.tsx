import { FunctionComponent } from 'react';

const ContentContainer: FunctionComponent = ({ children }) => (
  <div
    className="sm:max-w-screen-sm 
    md:max-w-screen-md 
    lg:max-w-screen-lg 
    xl:max-w-screen-xl 
    m-auto px-1 sm:px-2 
    font-serif"
  >
    {children}
  </div>
);

export default ContentContainer;
