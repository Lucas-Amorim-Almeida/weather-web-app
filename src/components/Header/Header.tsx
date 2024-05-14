import { useEffect, useState } from "react";
import styles from "./headerStyles.module.scss";
import Image from "next/image";

export const Header = () => {
  const windowWidth = 1366;
  const windowHeight = 720;
  return (
    <header className={styles.header_container}>
      <div>
        <a href="#">
          <h1>Logo</h1>
        </a>
      </div>
      <div className={styles.header_menu_wrapper}>
        <nav>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </nav>
        <div>
          <Image
            src="/icons/charm--menu-hamburger.svg"
            alt="Menu"
            width={windowWidth * 0.05} //pega 5% da largura da tela
            height={windowHeight * 0.05} //pega 5% da altura da tela
            className={styles.header_menu_icon}
          />
        </div>
      </div>
    </header>
  );
};
