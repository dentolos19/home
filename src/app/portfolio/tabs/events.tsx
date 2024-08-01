import EventCard from "@/components/event-card";
import data from "@/data/events.json";

export default function EventsTab() {
  return (
    <section className={"p-4"}>
      <div className={"grid sm:grid-cols-2 gap-2"}>
        {data.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}