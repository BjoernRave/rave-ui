import Head from "next/head"
import { FC } from "react"

const baseUrl = "https://admin.coronafreepass.de"

const Meta: FC<{ title?: string }> = ({ title }) => {
  const composedTitle = title ? `WES | ${title}` : "WES"

  const description = `WES Intranet`

  const logo = `${baseUrl}/banner.png`

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="shortcut icon" href={"/logo_32.png"} />
        <link rel="manifest" href={"/manifest.json"} />
        <meta name="theme-color" content={"#50C1C7"} />
        <link rel="apple-touch-icon" href={"/logo_180.png"}></link>

        <title>{composedTitle}</title>
      </Head>
    </>
  )
}

export default Meta
