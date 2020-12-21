import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";

import Navigation from "./navigation";
import Footer from "./footer";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ title, subtitle, children }) => {
  let header = (
    <header className="hero">
      <Navigation />

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
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
}

const Wrapper = styled.main`
  min-height: 50vh;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export default Layout;
