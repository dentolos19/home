import EventItem from "@/app/(main)/portfolio/academic/_components/event-item";
import { getLocalEvents } from "@/lib/local";

export default function EventsTab() {
  const events = getLocalEvents();
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