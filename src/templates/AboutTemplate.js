import React from "react"
import styles from "../styles.module.css"
import { Link } from "gatsby"

function AboutTemplate({
  pageContext: { locale, basePath: path, content, alternateLocales },
}) {
  return (
    <div className={styles.container}>
      <h1>{`${locale}`.toUpperCase()}</h1>
      <p>
        Other locales:
        {alternateLocales.map(locale => (
          <Link
            key={locale}
            to={`/${locale}/${path}`}
            style={{
              margin: ".5em",
              border: "1px solid",
              padding: ".5em",
            }}
          >
            {locale}
          </Link>
        ))}
      </p>
      <p>{content}</p>
    </div>
  )
}

export default AboutTemplate
