import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-slate-900 h-screen p-4 flex flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto p-8 rounded">
        <h1 className="text-5xl font-bold text-slate-600 leading-snug">
          <a href="https://nextjs.org" target="_blank" rel="noreferrer"><span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-700 hover:to-sky-500 hover:from-lime-200 hover:underline">NextJS</span></a> &&<br/> 
          <a href="https://jestjs.io" target="_blank" rel="noreferrer"><span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-700 hover:to-sky-500 hover:from-lime-200 hover:underline">Jest</span></a> && <br/>
          <a href="https://tailwindcss.io" target="_blank" rel="noreferrer"><span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-700 hover:to-sky-500 hover:from-lime-200 hover:underline">TailwindCSS</span></a>
        </h1>
        

      </main>

  
    </div>
  )
}
