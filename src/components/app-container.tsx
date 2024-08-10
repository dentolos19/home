import NavigationBar from "@/components/navigation-bar";
import SearchModal from "@/components/search-modal";
import React from "react";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className={"h-full grid grid-rows-[auto,1fr]"}>
      <NavigationBar />
      {props.children}
      <SearchModal />
    </div>
  );
}