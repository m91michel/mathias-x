import React, { Fragment } from "react";
import SEO from "../components/seo";
import "./mystyles.scss";
import Footer from "../components/footer";
import LatestPosts from "../components/latest-posts";
import HeaderHero from "../components/header-hero";

class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Home"
          keywords={[
            `Mathias Michel`,
            `Developer`,
            `Entwickler`,
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `munich`,
            `blockchain`,
          ]}
        />
        <HeaderHero />
        <LatestPosts />
        <Footer />
      </Fragment>
    );
  }
}
export default IndexPage;
