"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";

const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;
  if (!frozen) {
    return <>{props.children}</>;
  }
  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

export default function TransitionContainer(props: { className?: string; children: React.ReactNode }) {
  const key = usePathname();
  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        key={key}
        className={props.className}
        initial={"hidden"}
        animate={"enter"}
        exit={"exit"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}