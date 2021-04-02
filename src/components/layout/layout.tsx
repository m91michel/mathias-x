import React, { Fragment, ReactNode } from "react";
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
      <main className="min-h-2/4 max-w-screen-xl mx-auto my-0 px-4 lg:px-0">
        <section>
          <div className="container content">{children}</div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
