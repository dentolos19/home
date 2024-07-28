import AchievementsTab from "@/app/portfolio/tabs/achievements";
import EventsTab from "@/app/portfolio/tabs/events";
import ExperienceTab from "@/app/portfolio/tabs/experience";
import type { SearchParams } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const tabs = [
  {
    label: "Experience",
    value: "experience",
    component: <ExperienceTab />,
  },
  {
    label: "Events",
    value: "events",
    component: <EventsTab />,
  },
  {
    label: "Achievements",
    value: "achievements",
    component: <AchievementsTab />,
  },
];

export default function Page(props: { searchParams?: SearchParams }) {
  const currentTab =
    tabs.find((tab) => tab.value === props.searchParams?.tab) ?? tabs[0];

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%] grid grid-rows-[auto,1fr] gap-2"}>
        <div className={"card bg-base-300"}>
          <div className={"card-body"}>
            <h2 className={"card-title"}>Dennise Catolos</h2>
            <p>Aspiring Technologist</p>
          </div>
        </div>
        <div className={"bg-base-300 rounded-box"}>
          <div className={"tabs tabs-bordered"} role={"tablist"}>
            {tabs.map((tab) => (
              <Link
                key={tab.value}
                className={clsx(
                  "tab",
                  tab.value === currentTab.value && "tab-active"
                )}
                role={"tab"}
                href={`?tab=${tab.value}`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div>{currentTab.component}</div>
        </div>
      </div>
    </main>
  );
}