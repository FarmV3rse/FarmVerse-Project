
'use client';
import React, { useEffect, useState } from "react";
import styles from "./landing-page.module.scss";
import { useDevice } from "../../utils/useDevice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faArrowDown, faBars, faChevronCircleUp, faCubes, faExchangeAlt, faLock, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Roadmap from "./road-map/road-map.component";
import FutureFarmVerse from "./future/future.component";
import ContactUs from "./contact-us/contact-us.component";
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
                                        <span className={styles.MenuItem} onClick={() => handleScroll("about")}>About Us</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("how-it-works")}>How It Works</span>
                                        <span className={styles.MenuItem} onClick={() => handleScroll("why-farmverse")}>Why FarmVerse</span>
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
                    <div className={styles.contentControl}>
                        <span className={styles.headerTitle}>Grow, Earn, and Change the World!</span>
                        <span className={styles.headerContent}>Imagine a world where farming isn’t just a game—it’s a
                            movement! Welcome to FarmVerse, the revolutionary blockchain-powered
                            farming experience where your digital crops aren’t just pixels—they’re real!
                            Yes, you read that right. What you grow in FarmVerse can be exchanged
                            for actual produce or sold to other players as NFTs. It’s farming redefined, with real-world impact!</span>
                    </div>
                </div>

                <div className={styles.SectionControl} id="how-it-works">
                    <div className={styles.contentControl}>
                        <span className={styles.headerTitle}>🚀 How It Works...</span>
                        <span className={styles.headerContent}>Powered by Blockchain: Transparency, ownership, and secure transactions via Smart Contracts</span>
                        <div className={styles.grid3Control}>
                            <div className={styles.gridItem}>
                                <span className={styles.gridTitle}>Start Your Farm</span>
                                <span className={styles.gridDesc}>Choose your land, plant your seeds, and nurture your crops with AI-powered guidance.</span>
                            </div>
                            <div className={styles.gridItem}>
                                <span className={styles.gridTitle}>Harvest and Earn</span>
                                <span className={styles.gridDesc}>Trade your crops for real-world produce or sell them as digital assets in the NFT marketplace.</span>
                            </div>
                            <div className={styles.gridItem}>
                                <span className={styles.gridTitle}>Create Real-World Impact</span>
                                <span className={styles.gridDesc}>Every harvest supports sustainable farming initiatives, reduces food waste, and promotes eco-friendly agriculture.</span>
                            </div>
                        </div>

                    </div>



                </div>

                <div className={styles.SectionControl} id="why-farmverse">

                    <div className={styles.gridLeftRightControl}>
                        <img src="/assets/images/img-sec-2.jpg" className={styles.gridImgLeft}></img>
                        <div className={styles.borderControl}>
                            <span className={styles.gridTitle}>Why FarmVerse Matters...</span>
                            <div className={styles.gridContentControl}>
                                <span className={styles.gridContentTitle}>Traditional farming faces major challenges:</span>
                                <ul className={styles.gridContentValue}>
                                    <li>Climate change impacts food security</li>
                                    <li>Inefficient distribution leads to food waste</li>
                                    <li>Small farmers struggle to scale their operations</li>
                                </ul>
                            </div>
                            <div className={styles.gridContentControl}>
                                <span className={styles.gridContentTitle}> FarmVerse is the solution! By gamifying agriculture, we incentivize a new generation of digital farmers to make real-world change.</span>
                                <ul className={styles.gridContentValue}>
                                    <li>Did You Know?</li>
                                    <li>Global food demand is expected to rise by 70% by 2050.</li>
                                    <li>Blockchain traceability reduces fraud in food supply chains, ensuring ethical sourcing.</li>
                                    <li>Tokenized farming assets empower users with ownership and financial control.</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>

                <div className={styles.SectionControl} id="how-it-works">
                    <div className={styles.contentControl}>
                        <span className={styles.headerTitle}>The Tech Behind FarmVerse...</span>
                        <span className={styles.headerContent}>FarmVerse is built on cutting-edge blockchain technology, ensuring:</span>
                        <div className={styles.grid4Control}>
                            <div className={styles.gridItem}>
                                <FontAwesomeIcon icon={faLock} className={styles.gridIcon}></FontAwesomeIcon>
                                <span className={styles.gridTitle}>Security & Transparency</span>
                                <span className={styles.gridDesc}>Every transaction is immutable and visible on the blockchain.</span>
                            </div>
                            <div className={styles.gridItem}>
                                <FontAwesomeIcon icon={faProjectDiagram} className={styles.gridIcon}></FontAwesomeIcon>
                                <span className={styles.gridTitle}>Decentralized Economy</span>
                                <span className={styles.gridDesc}>No middlemen. You own your farm, assets, and profits.</span>
                            </div>
                            <div className={styles.gridItem}>
                                <FontAwesomeIcon icon={faCubes} className={styles.gridIcon}></FontAwesomeIcon>
                                <span className={styles.gridTitle}>NFT Integration</span>
                                <span className={styles.gridDesc}>Every piece of land, seed, and upgrade can be bought, sold, or traded.</span>
                            </div>
                            <div className={styles.gridItem}>
                                <FontAwesomeIcon icon={faCubes} className={styles.gridIcon}></FontAwesomeIcon>
                                <span className={styles.gridTitle}>Smart Contracts</span>
                                <span className={styles.gridDesc}>Automates farming, harvesting, and marketplace transactions.</span>
                            </div>
                        </div>

                    </div>

                </div>
                

                <div className={styles.SectionControl} id="future">
                  <FutureFarmVerse></FutureFarmVerse>
                </div>

                <div className={styles.SectionControl} id="roadmap">
                    <Roadmap></Roadmap>
                </div>

                <div className={styles.SectionControl} id="contact">
                   <ContactUs></ContactUs>
                </div>

            </div>
        </>
    );
}

export default LandingPageComponent;