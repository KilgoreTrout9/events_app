import Image from 'next/image'
import Link from 'next/link';

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map(category =>
      <Link className="card" key={category.id} href={`/events/${category.id}`}>
        <img className="image" width={400} alt={category.title} src={category.image} />
        <div className="content">
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </div>
      </Link>
    )}
  </div>
)