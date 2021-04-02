import { Link } from "gatsby";
import React from "react";

type Props = {
  tag: string;
};

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <Link to={`/tags/${tag}`}>
      <span className="tag is-link">#{tag}</span>
    </Link>
  );
};
export default Tag;
