import styles from "./shared.module.scss";
import { useStyles } from "@/lib/utilities";

export default function NotFound() {
  const style = useStyles(styles);
  return (
    <main className={style("landing-page")}>
      <div className={style("container")}>
        <h3>Loading...</h3>
        <p>Please wait until the page loads!</p>
      </div>
    </main>
  );
}