import Image from 'next/image'
import Layout from '@/components/layout'
import Head from 'next/head'
//import utilStyles from '@/styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>test</title>
        <h1>test2</h1>
        <p>Test3</p>
      </Head>
    </Layout>
  )
}
