import EventCard from "@/components/event-card";
import { getEvents } from "@/content";

export default function EventsTab() {
  const events = getEvents();
  return (
    <section className={"p-4"}>
      <div className={"grid sm:grid-cols-2 gap-2"}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}