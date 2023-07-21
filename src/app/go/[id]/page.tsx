import styles from "./page.module.scss";
import NotFound from "@/app/not-found";
import { useStyles } from "@/lib/utilities";

const redirects = [
  {
    id: "ncac",
    url: "https://fakerspotter.vercel.app",
  },
  {
    id: "pf2331",
    url: "https://discord.gg/6Tck8VcJdT",
  },
];

export default function Page({ params }: { params: { id: string } }) {
  const redirect = redirects.find((redirect) => redirect.id === params.id);
  if (!redirect) return <NotFound />;
  const style = useStyles(styles);
  return (
    <>
      <meta httpEquiv={"refresh"} content={`1; url = ${redirect.url}`} />
      <main className={style(["page"])}>
        <div className={style(["container"])}>
          <h3>Redirecting</h3>
          <p>
            If you haven&apos;t been redirected, please click <a href={"#"}>this link</a>.
          </p>
        </div>
      </main>
    </>
  );
}