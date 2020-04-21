import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic, faChartBar, faCrow } from "@fortawesome/free-solid-svg-icons";

const myValues = [
  {
    title: "Agile Mindset",
    icon: faMagic,
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
  },
  {
    title: "Clean Code",
    icon: faChartBar,
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    title: "Value 3",
    icon: faCrow,
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  },
];

const ValuesAndPrinciples = () => {
  return (
    <section className="has-background-light" style={{ padding: "20px" }}>
      <div className="container content">
        <div className="has-text-centered">
          <h2 className="title is-3 is-spaced">Key Values and Principles</h2>
          <h3 className="subtitle is-5">
            I have the following mindset during my work
          </h3>
        </div>

        <div className="columns" style={{ margin: "20px 0 40px 0" }}>
          {myValues.map(value => (
            <div className="column has-text-centered">
              <span class="icon is-large has-text-info">
                <FontAwesomeIcon icon={value.icon} size="2x" />
              </span>
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ValuesAndPrinciples;
