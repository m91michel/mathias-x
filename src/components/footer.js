import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.footer`
  text-align: center;
  margin: 24px;
`

const Footer = () => (
  <Container>
    <div>
      Mathias Michel © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>
      <Link to="/imprint">Imprint</Link>
      {" | "}
      <Link to="/">Feed</Link>
    </div>
  </Container>
)
export default Footer
