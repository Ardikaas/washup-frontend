import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/logofoot.png";
import playstore from "../../../public/assets/images/googleplay.png";
import appstore from "../../../public/assets/images/appstore.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footercard}>
        <div className={styles.footerup}>
          <div className={styles.app}>
            <Image src={logo} alt="WashUp Logo" className={styles.footlogo} />
            <Link href={"/404"}>
              <Image
                src={playstore}
                alt="playstore Logo"
                className={styles.footplaystore}
              />
            </Link>
            <Link href={"/404"}>
              <Image
                src={appstore}
                alt="appstore Logo"
                className={styles.footappstore}
              />
            </Link>
          </div>
          <div className={styles.footerlink}>
            <Link href={"/404"} className={styles.footerlinkfont}>
              TENTANG KAMI↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              HUBUNGI KAMI↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              MITRA USAHA↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              BANTUAN↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              FAQ↗
            </Link>
          </div>
          <div className={styles.footerlink}>
            <Link href={"/404"} className={styles.footerlinkfont}>
              TWITTER↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              INSTAGRAM↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              YOUTUBE↗
            </Link>
            <Link href={"/404"} className={styles.footerlinkfont}>
              TIKTOK↗
            </Link>
          </div>
          <div className={styles.footerlink}></div>
        </div>
        <div className={styles.footerdown}>
          <div className={styles.footerabout}>
            <Link href={"/404"} className={styles.aboutlink}>
              Pemberitahuan Privasi
            </Link>
            <Link href={"/404"} className={styles.aboutlink}>
              Syarat dan Ketentuan
            </Link>
            <Link href={"/404"} className={styles.aboutlink}>
              Atribusi Data
            </Link>
            <Link href={"/404"} className={styles.aboutlink}>
              Cookie Settings
            </Link>
          </div>
          <div className={styles.copyright}>
            <h1>© 2024 WASHUP.</h1>
          </div>
        </div>
      </div>
      <div className={styles.blackfoot}>
        <h4>All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
