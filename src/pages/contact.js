import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const siteTitle = "Contact"

    return (
      <Layout title={siteTitle}>
        <SEO title={siteTitle} />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog
