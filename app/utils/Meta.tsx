import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
}

function Meta(props: Props) {
  const { title } = props

  return (
    <Head>
      <title>{title}</title>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <meta name="description" content="Mark Inger - Junior Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
