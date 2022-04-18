import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <main className="py-8 max-w-screen-md mx-auto">
        <h1 className="text-2xl font-bold py-8">#Todo</h1>
        <ul>
          <li>#TODO: Todos go here</li>
        </ul>

        </main>
      </div>

      

  
    </div>
  )
}
