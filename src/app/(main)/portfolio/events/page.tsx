import EventItem from "@/app/(main)/portfolio/_components/event-item";
import { getLocalEvents } from "@/lib/local";

export const revalidate = 0;

export default async function EventsTab() {
  const events = getLocalEvents();
  return (
    <main className={"p-4"}>
      <div className={"grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3"}>
        {events.map((event) => (
          <EventItem key={event.id} data={event} />
        ))}
      </div>
    </main>
  );
}