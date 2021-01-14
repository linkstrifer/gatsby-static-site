const del = require("del")
const fs = require("fs")

fs.writeFileSync("./public/.nojekyll")

const dir = "docs"

;(async () => {
  try {
    await del(dir)

    fs.rename("public", "docs", error => {
      if (error) {
        throw error
      }
    })
  } catch (error) {
    console.error(error)
  }
})()
