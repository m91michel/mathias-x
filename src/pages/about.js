import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
        render={data => {
          return (
            <Layout title="About Me">
              <SEO title={"About Mathias"} description={"About me"} />
              <SplitContainer>
                <TextContainer>
                  <p>
                    Hi there! My name is Mathias Michel and I am a Software
                    Developer specialized to Mobile and Web Frontend
                    development. I hold a Bachelor of Computer Science &amp;
                    Media from Technical University Nuremberg and I am working
                    at <a href="http://www.jambit.com">Jambit GmbH</a> since
                    2017.
                  </p>
                  <p>
                    Despite traveling the world and going to the gym I am
                    interested in finance like Stocks, P2P &amp;
                    Cryptocurrencies. I love nice designs and a good UX in
                    products which you can find for example in Apple products.
                  </p>
                  <p>
                    If you have feedback, questions, or want to contact me? Feel
                    free and <a href="/contact/">contact me</a> or find me on
                    Github, StackOverflow, and elsewhere around the web.
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
  }
`;
