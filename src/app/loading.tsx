import styles from "./shared.module.scss";
import { useStyles } from "@/lib/utilities";

export default function NotFound() {
  const style = useStyles(styles);
  return (
    <main className={style("page")}>
      <div className={style("container")}>
        <h3>Loading...</h3>
        <p>Please wait until our page loads!</p>
      </div>
    </main>
  );
}