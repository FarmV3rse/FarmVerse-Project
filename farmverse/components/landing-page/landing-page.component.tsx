
'use client';
import React, { useEffect, useState } from "react";
import styles from "./landing-page.module.scss";
import { useDevice } from "../../utils/useDevice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faArrowDown, faBars, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
const LandingPageComponent = () => {
    const { isMobile, isTablet, isDesktop } = useDevice();
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const aboutTop = aboutSection.offsetTop;
                setShowGoToTop(window.scrollY >= aboutTop);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <>
            <div className={styles.LandingControl}>
                <div className={styles.coverImageControl} id="welcome">
                    <div className={styles.HeaderControl}>
                        <span className={styles.HeaderIcon}>FarmV3rse</span>

                        <div className={styles.HeaderMenuControl}>

                            {
                                isMobile || isTablet ?
                                    <FontAwesomeIcon icon={faBars} className={styles.MenuItem} /> :
                                    <>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("welcome")}>Welcome</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("about")}>About FarmVerse</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("how-it-works")}>How It Works</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("why-farmverse")}>Why FarmVerse</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("tech")}>The Tech Behind FarmVerse</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("future")}>Future of FarmVerse</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("roadmap")}>Roadmap</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("contact")}>Contact Us</span>
                                    </>
                            }

                        </div>

                    </div>

                    <span className={styles.TextCover}>Welcome to FarmVerse – The Future of Farming is Here!</span>
                    <FontAwesomeIcon icon={faAngleDoubleDown} className={styles.arrowDownHere}></FontAwesomeIcon>

                 

                </div>
                {showGoToTop && (
                    <FontAwesomeIcon icon={faChevronCircleUp} className={styles.gotoTopIcon} onClick={scrollToTop} />
                )}
                <div className={styles.SectionControl} id="about">
                    <span className={styles.headerTitle}>🌱 Grow, Earn, and Change the World!</span>
                    <span className={styles.headerContent}>
                        Imagine a world where farming isn’t just a game—it’s a movement! Welcome to FarmVerse, the revolutionary blockchain-powered farming experience where your digital crops aren’t just pixels—they’re real!

                        ✔️ Grow your farm 🌾
                        ✔️ Earn rewards 💰
                        ✔️ Make a real-world impact 🌎

                        What you cultivate in FarmVerse can be exchanged for real produce or sold as NFTs—bridging the gap between virtual and reality!</span>
                </div>

                <div className={styles.SectionControl} id="how-it-works">
                    <span className={styles.headerTitle}>🚀 How It Works...</span>
                    <div className={styles.headerContent}>
                    🔹 Start Your Farm – Choose your land, plant your seeds, and nurture your crops with AI-powered guidance.
🔹 Harvest and Earn – Trade your crops for real-world produce or sell them as digital assets in the NFT marketplace.
🔹 Create Real-World Impact – Every harvest supports sustainable farming initiatives, reduces food waste, and promotes eco-friendly agriculture.

🔗 Powered by Blockchain: Transparency, ownership, and secure transactions via Smart Contracts.
                    </div>
                </div>

                <div className={styles.SectionControl} id="why-farmverse">
                    <span className={styles.headerTitle}>🌎 Why FarmVerse Matters...</span>
                    <div className={styles.headerContent}>
                    Traditional farming faces major challenges:
⚠️ Climate change impacts food security
⚠️ Inefficient distribution leads to food waste
⚠️ Small farmers struggle to scale their operations

FarmVerse is the solution! By gamifying agriculture, we incentivize a new generation of digital farmers to make real-world change.

📈 Did You Know?
✅ Global food demand is expected to rise by 70% by 2050.
✅ Blockchain traceability reduces fraud in food supply chains, ensuring ethical sourcing.
✅ Tokenized farming assets empower users with ownership and financial control.
                    </div>
                </div>

                <div className={styles.SectionControl} id="tech">
                    <span className={styles.headerTitle}>🔗 The Tech Behind FarmVerse...</span>
                    <div className={styles.headerContent}>
                    FarmVerse is built on cutting-edge blockchain technology, ensuring:
✔️ Security & Transparency – Every transaction is immutable and visible on the blockchain.
✔️ Decentralized Economy – No middlemen. You own your farm, assets, and profits.
✔️ NFT Integration – Every piece of land, seed, and upgrade can be bought, sold, or traded.
✔️ Smart Contracts – Automates farming, harvesting, and marketplace transactions.

A game where you farm, but with real value!
                    </div>
                </div>

                <div className={styles.SectionControl} id="future">
                    <span className={styles.headerTitle}>🎮 The Future of FarmVerse...</span>
                    <div className={styles.headerContent}>
                    🌟 Social & Player Interactions
👥 Trade & Collaborate – Team up with other farmers, share resources, and boost your earnings.
🏆 Seasonal Competitions – Win exclusive NFT rewards and rank up on leaderboards.
🤝 Community Farming – Work together to achieve large-scale farming goals with special benefits.

🤖 AI-Powered Farming & Smart Assistance
🚜 AI Farming Assistants – Get real-time insights, weather predictions, and crop management tips.
📊 Adaptive Economy – AI dynamically balances supply and demand, keeping the in-game economy thriving.
🌿 Smart Crop Recommendations – AI suggests the best crops to grow based on market trends.

💰 A Thriving NFT Marketplace
🛒 Buy & Sell Digital Crops – Trade with players or exchange for real-world produce.
🎨 NFT Customization – Upgrade and personalize your farm with rare NFT items.
🍽️ Farm-to-Table Connection – Your virtual harvest can be converted into real food!
                    </div>
                </div>

                <div className={styles.SectionControl} id="roadmap">
                    <span className={styles.headerTitle}>📅 Roadmap...</span>
                    <div className={styles.headerContent}>
                    ✅ Phase 1 – Alpha Launch (Q1 2025): Smart Contract Integration, NFT Marketplace, Basic Farming.
🚀 Phase 2 – Beta Expansion (Q2 2025): Community Features, AI Assistants, Real-World Produce Exchange.
🌎 Phase 3 – Global Impact (Q4 2025): Large-Scale Farming Missions, Sustainability Partnerships, Cross-Chain Expansion.

Join us on this journey and be part of the farming revolution!
                    </div>
                </div>

                <div className={styles.SectionControl} id="contact">
                    <span className={styles.headerTitle}>📩 Contact Us</span>
                    <div className={styles.headerContent}></div>
                </div>

            </div>
        </>
    );
}

export default LandingPageComponent;