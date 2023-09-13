import { useStyles } from "@/lib/utilities";
import styles from "./page.module.scss";

export default function Page() {
  const style = useStyles(styles);
  return (
    <main className={style("page")}>
      <div className={style("container")}>
        <div className={style("image")}>
          <img src={"https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=128"} />
        </div>
        <div className={style("content")}>
          <div className={style("name")}>Dennise Catolos</div>
          <div className={style("role")}>Student @ Nanyang Polytechnic</div>
          <div className={style("socials")}>
            <a href={"mailto:contact@dennise.me"}>
              <i className={style("lni lni-envelope")}></i>
            </a>
            <a href={"https://blog.dennise.me"}>
              <i className={style("lni lni-book")}></i>
            </a>
            <a href={"https://github.com/dentolos19"}>
              <i className={style("lni lni-github-original")}></i>
            </a>
            <a href={"https://linkedin.com/in/dentolos19"}>
              <i className={style(["lni lni-linkedin-original"])}></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}