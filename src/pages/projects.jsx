import React from "react";
import Link from "../components/general/Link";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

const projects = [
  {
    title: "Restaurant-Penelope",
    link: "https://restaurant-penelope.de/",
    description:
      "This Greek restaurant wanted to have a new website. Here we created the concept together, chose a theme and implemented the website. The implementation was done with Wordpress. ",
  },
  {
    title: "Alexander Wunsch",
    link: "https://alexander-wunsch.de/",
    description:
      "Alexander has developed a concept to lose weight and needed technical advice for his business. I am currently helping him with technical challenges and answering all his open questions. Besides creating and maintaining his website, I created a cool logo for his brand and helped him develop and implement the branding.",
  },
  {
    title: "Großkopf Elektrotechnik GmbH",
    link: "https://grosskopf-elektrotechnik-gmbh.de/",
    description:
      "I set up the website with Wordpress and provide technical support.",
  },
  {
    title: "Personal Wiki",
    link: "https://m91michel.github.io/knowledge/",
    description:
      "A personal wiki for myself, where I collect interesting information.",
  },
];

const Projects = () => {
  const siteTitle = "Side Projects";

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <div className="columns is-multiline">
        {projects.map((project) => (
          <div className="column is-half">
            <Link href={project.link}>
              <div className="notification is-info">
                <h1 className="has-text-white">{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Projects;
