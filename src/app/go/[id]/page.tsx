import styles from "./page.module.scss";
import NotFound from "@/app/not-found";
import { getRedirect } from "@/lib/database";
import { useStyles } from "@/lib/utilities";

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const redirect = await getRedirect(params.id);
  if (!redirect) return <NotFound />;
  const style = useStyles(styles);
  return (
    <>
      <meta httpEquiv={"refresh"} content={`1; url = ${redirect.destination}`} />
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