import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import ilustration from "../../../public/assets/images/illustration.jpg";
import { useEffect, useState } from "react";

type CardProps = {
  type: "pelanggan" | "mitra";
};

export default function Card({ type }: CardProps) {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (type === "pelanggan") {
      setAnimationClass(styles.slideinleft);
    } else {
      setAnimationClass(styles.slideinright);
    }
  }, [type]);

  return (
    <>
      {type === "pelanggan" && (
        <div className={styles.cardpelanggan}>
          <div className={styles.bgtext}>WASHUP</div>
          <div className={`${styles.cardcontent} ${animationClass}`}>
            <Image
              src={ilustration}
              alt="Ilustrasi Pelanggan"
              className={styles.illustration}
            />
            <div className={styles.text}>
              <h1>Gabung Sebagia Pelanggan</h1>
              <h4>
                Laundry pakaian anda bersama Washup. Anda dapat menggunakan
                layanan antar jemput kami atau pilih opsi mandiri untuk
                kenyamanan anda
              </h4>
              <Link href={"/404"} className={styles.button}>
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      )}
      {type === "mitra" && (
        <div className={styles.cardpelanggan}>
          <div className={styles.bgtext}>WASHUP</div>
          <div className={`${styles.cardcontent} ${animationClass}`}>
            <Image
              src={ilustration}
              alt="Ilustrasi Pelanggan"
              className={styles.illustration}
            />
            <div className={styles.text}>
              <h1>Gabung Sebagai Mitra</h1>
              <h4>
                Laundry pakaian anda bersama Washup. Anda dapat menggunakan
                layanan antar jemput kami atau pilih opsi mandiri untuk
                kenyamanan anda
              </h4>
              <Link href={"/404"} className={styles.button}>
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
