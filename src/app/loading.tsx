import { useStyles } from "@/lib/utilities";
import styles from "./shared.module.scss";

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