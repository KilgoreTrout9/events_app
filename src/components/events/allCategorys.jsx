import Image from 'next/image'
import Link from 'next/link';

export const EventsPage = ({ data }) => (
  <div className="events_page">
    {data.map(event => (
      <Link className="card" key={event.id} href={`/events/${event.id}`}>
        <Image width={400} height={400} alt={event.title} src={event.image} />
        <h2>{event.title}</h2>
      </Link>
    ))}
  </div>
)