import React from "react";
import styles from "./road-map.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLeaf, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1 – Alpha Launch",
      date: "Q1 2025",
      icon: faRocket,
      description: "Smart Contract Integration, NFT Marketplace, Basic Farming.",
    },
    {
      id: 2,
      title: "Phase 2 – Beta Expansion",
      date: "Q2 2025",
      icon: faLeaf,
      description: "Community Features, AI Assistants, Real-World Produce Exchange.",
    },
    {
      id: 3,
      title: "Phase 3 – Global Impact",
      date: "Q4 2025",
      icon: faGlobe,
      description: "Large-Scale Farming Missions, Sustainability Partnerships, Cross-Chain Expansion.",
    },
  ];

  return (
    <section className={styles.roadmapSection} id="roadmap">
      <h2 className={styles.titleHeader}>📅 Roadmap</h2>
      <div className={styles.timeline}>
        {phases.map((phase, index) => (
          <div key={phase.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={phase.icon} className={styles.icon} />
            </div>
            <div className={styles.content}>
              <span className={styles.title}>{phase.title}</span>
              <span className={styles.date}>{phase.date}</span>
              <p>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerText}>
        Join us on this journey and be part of the farming revolution!
      </div>
    </section>
  );
};

export default Roadmap;
