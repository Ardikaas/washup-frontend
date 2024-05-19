import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcard}>
        <div>
          <Image src={logo} alt="washup logo" className={styles.imagenavbar} />
        </div>
        <div className={styles.linknavbar}>
          <Link href={"/404"} className={styles.link}>
            Bantuan
          </Link>
          <Link href={"/404"} className={styles.link}>
            Masuk
          </Link>
          <Link href={"/404"} className={styles.register}>
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}
