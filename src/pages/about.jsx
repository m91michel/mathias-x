import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

const SplitContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 768px) {
    flex: 2;
    padding-right: 20px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

class PageTemplate extends React.Component {
  render() {
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
              <SplitContainer>
                <TextContainer>
                  <p>
                    Hi there! My name is Mathias Michel and I am a Software
                    Developer specialized to Mobile and Web Frontend
                    development. I hold a Bachelor of Computer Science &amp;
                    Media from Technical University Nuremberg and I worked for{" "}
                    <a href="https://www.jambit.com" target="_blank" rel="noopener noreferrer">Jambit GmbH</a> for three
                    years. I am now looking forward to new challenges.
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
                </TextContainer>
                <ImageContainer>
                  <Image
                    fixed={data.aboutImage.childImageSharp.fixed}
                    alt="Thats me"
                  />
                </ImageContainer>
              </SplitContainer>
            </Layout>
          );
        }}
      />
    );
  }
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
