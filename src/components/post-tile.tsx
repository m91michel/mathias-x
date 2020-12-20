import React, { Fragment } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

type Props = {
  title: string;
  link: string;
  date: string;
  timeToRead: string;
}

const PostTile = ({ title, link, date, timeToRead }: Props) => {
  return (
    <Fragment>
      <div className="column">
        <article className="box has-text-centered">
          <Link to={link}>
            <h2 className="title">{title}</h2>
          </Link>
          <p>
            {date} -{" "}
            <small>
              <FontAwesomeIcon icon={faClock} /> {timeToRead} min
            </small>
          </p>
        </article>
      </div>
    </Fragment>
  )
}
export default PostTile
