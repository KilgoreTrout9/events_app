import { Inter } from '@next/font/google';
import { HomePage } from '/src/components/home/home-page';

//const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <div>
      <HomePage data={data} />
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
