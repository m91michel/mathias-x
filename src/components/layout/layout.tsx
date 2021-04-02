import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";

import Navigation from "./navigation";
import Footer from "./footer";
import Tag from "../tag";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  tags?: string[];
};

const Layout: React.FC<Props> = ({ title, subtitle, children, tags }) => {
  const header = (
    <header className="hero">
      <Navigation />

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ marginBottom: '0.5rem' }}>{title}</h1>
          <div>
          {subtitle && <span className="subtitle">{subtitle}</span>}
          {tags && (
            <div>
              {tags?.map((tag) => <Tag tag={tag}/>)}
            </div>
          )}
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <Fragment>
      <header>{header}</header>
      <Wrapper>
        <section>
          <div className="container content">{children}</div>
        </section>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

const Wrapper = styled.main`
  min-height: 50vh;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export default Layout;
