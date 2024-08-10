import { getURL } from "@/actions";
import AchievementsTab from "@/app/(main)/portfolio/tabs/achievements";
import EventsTab from "@/app/(main)/portfolio/tabs/events";
import ExperienceTab from "@/app/(main)/portfolio/tabs/experience";
import type { SearchParams } from "@/types";
import { setSearchParam } from "@/utils";
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

export default async function Page(props: { searchParams?: SearchParams }) {
  const url = await getURL();
  const currentTab = tabs.find((tab) => tab.value === props.searchParams?.tab) ?? tabs[0];

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%] grid grid-rows-[auto,1fr] gap-2"}>
        <div className={"grid grid-cols-[auto,1fr,auto] bg-base-300 rounded-box overflow-hidden"}>
          <div className={"mr-8 avatar"}>
            <div className={"size-32"}>
              <img src={"/assets?id=face"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"flex flex-col justify-center"}>
            <h2 className={"mb-1 text-xl font-bold"}>Dennise Catolos</h2>
            <p>Aspiring Technologist</p>
          </div>
          <div className={"px-6 flex items-center"}>
            <Link className={"btn btn-circle btn-outline"} href={"https://linkedin.com/in/dentolos19"}>
              <i className={"fa-solid fa-arrow-up-right-from-square"}/>
            </Link>
          </div>
        </div>
        <div className={"bg-base-300 rounded-box"}>
          <div className={"tabs tabs-bordered"} role={"tablist"}>
            {tabs.map((tab) => (
              <Link
                key={tab.value}
                className={clsx("tab", tab.value === currentTab.value && "tab-active")}
                role={"tab"}
                href={setSearchParam(url, "tab", tab.value).href}
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