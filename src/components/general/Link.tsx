import React, { ReactNode } from "react";

interface Props {
  href?: string;
  children: ReactNode;
}

const Link: React.FC<Props> = ({href, children}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
