import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { title, subtitle, children } = this.props
    let header = (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            {subtitle && <h2 className="subtitle">{subtitle}</h2>}
          </div>
        </div>
      </section>
    )
    return (
      <Wrapper>
        <Navigation />
          {title && <header>{header}</header>}
          <main className="content">{children}</main>
        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 50vh;
  max-width: 1024px;
  margin: 0 auto;
`

export default Layout
