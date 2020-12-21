import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

type KeyValue = {
  [key: string]: string
}

const encode = (data: KeyValue) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact: React.FC = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const siteTitle = "Contact";

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <div className="columns">
        <div className="column is-one-third">
          <ul>
            <li>
              Twitter:{" "}
              <a
                href="https://twitter.com/m91michel"
                target="_blank"
                rel="noopener noreferrer"
              >
                m91michel
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/m91michel"
                target="_blank"
                rel="noopener noreferrer"
              >
                m91michel
              </a>
            </li>
            <li>
              Xing:{" "}
              <a
                href="https://www.xing.com/profile/Mathias_Michel4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mathias Michel
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/mathias-michel-b07b6557/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mathias Michel
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            action="/thanks/"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">
                Name
                <div className="control">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="Whats your name?"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Email
                <div className="control">
                  <input
                    className="input"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Where can I reply?"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Message
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange}
                    placeholder="Textarea"
                  />
                </div>
              </label>
            </div>

            <input type="hidden" name="form-name" value="contact" />

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default Contact;
