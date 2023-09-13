import { useStyles } from "@/lib/utilities";
import styles from "./shared.module.scss";

export default function NotFound() {
  const style = useStyles(styles);
  return (
    <main className={style("landing-page")}>
      <div className={style("container")}>
        <h3>404</h3>
        <p>The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}