import React from "react"
import { Link } from "gatsby"
import styles from "../styles.module.css"

const IndexPage = () => (
  <div className={styles.container}>
    <p>The About page is loaded from a JSON file, it supports i18n.</p>
    <Link to="/en_US/about">
      <button>Go to about</button>
    </Link>
  </div>
)

export default IndexPage
