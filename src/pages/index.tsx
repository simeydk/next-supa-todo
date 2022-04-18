import Head from 'next/head'
import supabase from '@/utils/supabase'

export async function getStaticProps() {
  const { data: posts, error } = await supabase.from('todos').select('*');

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      posts,
    },
  };
}


export default function Home(props) {
  
  console.log(props)

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
