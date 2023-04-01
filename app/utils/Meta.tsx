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
    </Head>
  )
}

export default Meta
