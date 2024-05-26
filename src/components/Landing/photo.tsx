import Image from "next/image";
import photo from "../../../public/assets/images/photo.png";
import styles from "./Photo.module.css";

export default function Photo() {
  return (
    <div className={styles.photocontainer}>
      <Image src={photo} alt="ilustrasi mesincuci" className={styles.photo} />
      <div className={styles.text}>
        <h1>Washup.</h1>
        <h2>Untuk Pakaian Selalu Bersih, Setiap Hari.</h2>
      </div>
    </div>
  );
}
