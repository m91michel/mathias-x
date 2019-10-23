import React from "react"
import { navigate } from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default function Contact() {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    const siteTitle = "Contact"

    return (
        <Layout title={siteTitle}>
            <SEO title={siteTitle} />
            <form 
                name="contact" 
                method="post"
                data-netlify="true"
                action="/thanks/"
                onSubmit={handleSubmit}
            >
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            placeholder="Whats your name?"
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            placeholder="Where can I reply?"
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            name="message"
                            onChange={handleChange}
                            placeholder="Textarea"
                        />
                    </div>
                </div>

                <input type="hidden" name="form-name" value="contact" />

                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
