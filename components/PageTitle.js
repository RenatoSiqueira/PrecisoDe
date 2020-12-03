import React from "react"
import Head from "next/head"

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - Você precisa de quem?</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="application-name" content="PrecisoDe" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Preciso de.." />
      <meta name="description" content="Preciso de.." />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="og:title" content="Preciso de..." />
      <meta property="og:description" content="Preciso de..." />
    </Head>
  )
}

export default PageTitle
