import Link from 'next/link';
import { EventsPage } from '/src/components/events/allCategorys';

const AllCategoryPage = ({ data }) => {
  return <EventsPage data={data} />
}

export default AllCategoryPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')

  return {
    props: {
      data: events_categories,
    },
  };
}