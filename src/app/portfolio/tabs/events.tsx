import EventCard from "@/components/event-card";
import data from "@/data/events.json";
import Link from "next/link";

export default function EventsTab() {
  const groupValues = Array.from(new Set(data.map((event) => event.group)));

  return (
    <section className={"p-4"}>
      <div className={"mb-2 space-x-2"}>
        <Link className={"btn btn-sm btn-outline"} href={"#"}>
          All
        </Link>
        {groupValues.map((group) => (
          <Link key={group} className={"btn btn-sm btn-outline"} href={"#"}>
            {group}
          </Link>
        ))}
      </div>
      <div className={"grid sm:grid-cols-2 gap-2"}>
        {data.map((event, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey:
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}