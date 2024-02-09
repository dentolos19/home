import { generateStyler } from "@/lib/utilities";
import styles from "./page.module.scss";

export default function Page() {
  const style = generateStyler(styles);
  return (
    <main className={style("page")}>
      <div className={style("container")}>
        <div className={style("image")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={"Avatar"}
            src={
              "https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=128"
            }
          />
        </div>
        <div className={style("content")}>
          <div className={style("name")}>Dennise Catolos</div>
          <div className={style("role")}>Student @ Nanyang Polytechnic</div>
          <div className={style("socials")}>
            <a href={"mailto:contact@dennise.me"}>
              <i className={style("fa-solid fa-envelope")}></i>
            </a>
            <a href={"https://github.com/dentolos19"}>
              <i className={style("fa-brands fa-github")}></i>
            </a>
            <a href={"https://linkedin.com/in/dentolos19"}>
              <i className={style(["fa-brands fa-linkedin"])}></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}