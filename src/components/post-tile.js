import React, { Fragment } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const PostTile = ({ title, link, description, excerpt, date, timeToRead }) => {
  return (
    <Fragment>
      <div className="column">
        <article className="box has-text-centered">
          <Link to={link}>
            <p className="title">{title}</p>
          </Link>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
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
