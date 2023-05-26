import styles from "./page.module.css";

import Contact from "./sections/contact";
import Intro from "./sections/intro";

export default function Page() {
  return (
    <main className={styles.container}>
      <section id="intro">
        <Intro />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}