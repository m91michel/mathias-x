import React, { Fragment } from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

class Layout extends React.Component {
    render() {
        const { title, subtitle, children } = this.props
        let header = (
            <section className="hero">
                <div className="hero-head">
                    <Navigation />
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">{title}</h1>
                        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
                    </div>
                </div>
            </section>
        )
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
        )
    }
}

const Wrapper = styled.main`
  min-height: 50vh;
  max-width: 1024px;
  margin: 0 auto;
`

export default Layout
