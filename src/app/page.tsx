"use client";

import Switch from "@/components/Landing/switch";
import Card from "@/components/Landing/card";
import { useState } from "react";
import Photo from "@/components/Landing/photo";
import styles from "./Page.module.css";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<"pelanggan" | "mitra">(
    "pelanggan"
  );

  return (
    <>
      <Photo />
      <h1 className={styles.text}>
        Dari layanan laundry praktis hingga peluang penghasilan tambahan.
      </h1>
      <h1 className={styles.text}>
        Platform serbaguna untuk semua kebutuhan laundry Anda.
      </h1>
      <Switch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Card type={selectedTab} />
    </>
  );
}
