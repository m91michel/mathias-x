import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Link from "../components/general/Link";

const PageTemplate: React.FC = () => {
    return (
      <StaticQuery
        query={aboutQuery}
        render={(data) => {
          const { social } = data.site.siteMetadata;
          const description = `Hi there! My name is Mathias Michel and I am a Software
          Developer specialized to Mobile and Web Frontend
          development.`;
          const title = "About"
          return (
            <Layout title="Who I am?">
              <SEO title={title} description={description} />
              <div className="md:flex">
                <div className="md:flex-2 md:pr-5">
                  <p>
                    Hi there! My name is Mathias Michel and I am a Software
                    Developer specialized to Mobile and Web Frontend
                    development. I hold a Bachelor of Computer Science &amp;
                    Media from Technical University Nuremberg and I worked for{" "}
                    <Link href="https://www.jambit.com">Jambit GmbH</Link> for three
                    years. I am now working for <Link href="https://www.klarx.de">Klarx</Link>.
                  </p>
                  <p>
                    Despite traveling the world and going to the gym I am
                    interested in finance like Stocks, P2P &amp;
                    Cryptocurrencies. I love nice designs and a good UX in
                    products which you can find for example in Apple products.
                  </p>
                  <p>
                    If you have feedback, questions, or just want to contact me?
                    You can use the <a href="/contact/">contact form</a> or you
                    can find me on <a href={social.github}>Github</a>, <a href={social.linkedIn}>LinkedIn</a> or <a href={social.xing}>Xing</a>
                  </p>
                </div>
                <div className="flex-1 md:flex-1 max-md:pt-5 md:pt-0">
                  <Image
                    fixed={data.aboutImage.childImageSharp.fixed}
                    alt="Thats me"
                  />
                </div>
              </div>
            </Layout>
          );
        }}
      />
    );
}

export default PageTemplate;

const aboutQuery = graphql`
  query AboutQuery {
    aboutImage: file(absolutePath: { regex: "/mm-alpen.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          twitter
          github
          xing
          linkedIn
        }
      }
    }
  }
`;
