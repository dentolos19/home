import AchievementsTab from "@/app/(main)/portfolio/academic/tabs/achievements";
import EventsTab from "@/app/(main)/portfolio/academic/tabs/events";
import PositionsTab from "@/app/(main)/portfolio/academic/tabs/positions";
import { updateSearchParams } from "@/lib/utils";
import type { SearchParams } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const tabs = [
  {
    label: "Positions",
    value: "positions",
    component: <PositionsTab />,
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

export default async function Page(props: { searchParams?: SearchParams }) {
  const currentTab = tabs.find((tab) => tab.value === props.searchParams?.tab) ?? tabs[0];

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%] grid grid-rows-[auto,1fr] gap-2"}>
        <div className={"grid grid-cols-[auto,1fr] bg-base-300 rounded-box overflow-hidden"}>
          <div className={"mr-8 avatar"}>
            <div className={"size-32"}>
              <img src={"/assets?id=cavatar"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"flex flex-col justify-center"}>
            <h2 className={"mb-1 text-xl font-bold"}>Dennise Catolos</h2>
            <p>Year 1 Diploma in Information Technology</p>
          </div>
        </div>
        <div className={"bg-base-300 rounded-box"}>
          <div className={"tabs tabs-bordered"} role={"tablist"}>
            {tabs.map((tab) => (
              <Link
                key={tab.value}
                className={clsx("tab", tab.value === currentTab.value && "tab-active")}
                role={"tab"}
                href={updateSearchParams("tab", tab.value).href}
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