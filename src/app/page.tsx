import styles from "@/styles/home_page.module.scss";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.pageBody}>
      <Header />
      <Hero />
    </main>
  );
}

