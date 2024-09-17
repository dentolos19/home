import EventItem from "@/app/(main)/portfolio/_components/event-item";
import { getLocalEvents } from "@/lib/local";

export default async function Page() {
  const events = getLocalEvents();
  return (
    <main className={"p-4"}>
      <div className={"grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3"}>
        {events.map((event, index) => (
          <EventItem key={index} data={event} />
        ))}
      </div>
    </main>
  );
}