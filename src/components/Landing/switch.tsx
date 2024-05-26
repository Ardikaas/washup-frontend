import styles from "./Switch.module.css";

type SwitchProps = {
  selectedTab: "pelanggan" | "mitra";
  setSelectedTab: (tab: "pelanggan" | "mitra") => void;
};

export default function Switch({ selectedTab, setSelectedTab }: SwitchProps) {
  return (
    <div className={styles.switchcontainer}>
      <div className={styles.switch}>
        <div
          className={`${styles.indicator} ${
            selectedTab === "pelanggan" ? styles.pelanggan : styles.mitra
          }`}
        ></div>
        <button
          onClick={() => setSelectedTab("pelanggan")}
          className={styles.button}
        >
          Pelanggan
        </button>
        <button
          onClick={() => setSelectedTab("mitra")}
          className={styles.button}
        >
          Mitra
        </button>
      </div>
    </div>
  );
}
