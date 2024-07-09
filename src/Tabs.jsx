import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./css/Tabs.module.css";

export default function ControlledTabsExample() {
  const [key, setKey] = useState("home");

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className={`customTabs ${styles.customTabs}`}>
      <Tab eventKey="home" title="Home" tabClassName={styles.TabButton}>
        <div className={styles.TabContent}>Tab content for Home</div>
      </Tab>
      <Tab eventKey="profile" title="Profile" tabClassName={styles.TabButton}>
        <div className={styles.TabContent}>Tab content for Profile</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" tabClassName={styles.TabButton}>
        <div className={styles.TabContent}>Tab content for Contact</div>
      </Tab>
    </Tabs>
  );
}
