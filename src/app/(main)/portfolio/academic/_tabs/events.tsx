import EventItem from "@/app/(main)/portfolio/academic/_components/event-item";
import { getEvents } from "@/lib/content";

export default function EventsTab() {
  const events = getEvents();
  return (
    <section className={"p-4"}>
      <div className={"grid sm:grid-cols-2 gap-2"}>
        {events.map((event) => (
          <EventItem key={event.id} data={event} />
        ))}
      </div>
    </section>
  );
}