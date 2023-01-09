import Head from 'next/head'
import ManualHeader from "../components/Header"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lottery Smart Contract</title>
        <meta name="description" content="Smart contract lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Connect nav bar */}
      <ManualHeader />
    </div>
  )
}
