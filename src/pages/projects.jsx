import React from "react";
// import { navigate } from "gatsby-link";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

const Projects = () => {
  const siteTitle = "Projects";

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <div className="columns">
        <div className="column">
            <input type="hidden" name="form-name" value="contact" />

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  Submit
                </button>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
export default Projects;
