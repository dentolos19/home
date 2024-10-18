import AchievementItem from "@/app/(main)/portfolio/_components/achievement-item";
import { getLocalAchievements } from "@/lib/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
};

export default async function Page() {
  const events = getLocalAchievements();
  return (
    <main className={"p-4"}>
      <div className={"grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3"}>
        {events.map((event, index) => (
          <AchievementItem key={index} data={event} />
        ))}
      </div>
    </main>
  );
}