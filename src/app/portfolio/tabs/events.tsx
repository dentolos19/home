import EventCard from "@/components/event-card";
import data from "@/data/events.json";

export default function EventsTab() {
  return (
    <section className={"p-4 grid sm:grid-cols-2 gap-2"}>
      {data.map((event, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey:
        <EventCard key={index} {...event} />
      ))}
    </section>
  );
}