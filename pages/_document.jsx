import Document, { Head, Html, Main, NextScript } from "next/document"
import { classes } from "../lib/utils"

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

class MyDocument extends Document {
  render() {
    return (
      <Html className={classes("scroll-smooth")}>
        <Head>
          <link href={font} rel="stylesheet" />
        </Head>
        <body
          className={classes(
            "overflow-y-auto overflow-x-hidden",
            "bg-amber-50 font-poppins"
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument