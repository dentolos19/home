import EventCard from "@/app/(main)/portfolio/academic/_components/event-card";
import { getEvents } from "@/lib/content";

export default function EventsTab() {
  const events = getEvents();
  return (
    <section className={"p-4"}>
      <div className={"grid sm:grid-cols-2 gap-2"}>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}