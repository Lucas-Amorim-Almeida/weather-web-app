import { useEffect, useState } from "react";
import styles from "./headerStyles.module.scss";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { CharmMenuHamburger } from "./iconMenuHeader";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "500",
});

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
        <nav className={archivo.className}>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </nav>
        <div>
          <CharmMenuHamburger width="2.5rem" height="2.5rem" />
          {/*
          <Image
            src="/icons/charm--menu-hamburger.svg"
            alt="Menu"
            width={windowWidth * 0.05} //pega 5% da largura da tela
            height={windowHeight * 0.05} //pega 5% da altura da tela
            className={styles.header_menu_icon}
          />
           */}
        </div>
      </div>
    </header>
  );
};
