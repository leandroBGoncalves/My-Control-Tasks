import Head from 'next/head'
import ContainerTasks from '../components/ContainerTasks'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Control Tasks</title>
      </Head>
      <ContainerTasks />
    </div>
  )
}
