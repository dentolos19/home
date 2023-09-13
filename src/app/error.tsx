"use client";

import { useStyles } from "@/lib/utilities";
import styles from "./shared.module.scss";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const style = useStyles(styles);
  return (
    <main className={style("landing-page")}>
      <div className={style("container")}>
        <h3>An unhandled error had occurred!</h3>
        <p>{error.message}</p>
      </div>
    </main>
  );
}