import Link from 'next/link';
import { CategoryPage } from '/src/components/events/singleCategory'

const SingleCatagoryPage = ({ data, pageName }) => {
  return (
    <CategoryPage data={data} pageName={pageName} />
  )
}

export default SingleCatagoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(event => {
    return {
      params: {
        category: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.category;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter(event => event.city === id)

  return { props: { data, pageName: id } };
}
