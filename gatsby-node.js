/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const pathsData = require("./data.json")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const AboutTemplate = path.resolve("./src/templates/AboutTemplate.js")

  for (const [path, data] of Object.entries(pathsData)) {
    data.forEach(({ locale, content }) => {
      const alternateLocales = data
        .map(({ locale }) => locale)
        .filter(alternateLocale => alternateLocale !== locale)

      console.log(alternateLocales, locale, path)

      createPage({
        path: `/${locale}/${path}`,
        component: AboutTemplate,
        context: {
          alternateLocales,
          content,
          basePath: path,
          locale,
        },
      })
    })
  }
}
