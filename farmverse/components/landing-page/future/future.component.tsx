import React from "react";
import styles from "./future.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUsers, 
    faTrophy, 
    faHandsHelping, 
    faRobot, 
    faChartLine, 
    faSeedling, 
    faShoppingCart, 
    faPaintBrush, 
    faUtensils 
} from "@fortawesome/free-solid-svg-icons";

const FutureFarmVerse = () => {
    const features = [
        {
            title: "👥 Trade & Collaborate",
            description: "Team up with other farmers, share resources, and boost your earnings.",
            icon: faUsers,
        },
        {
            title: "🏆 Seasonal Competitions",
            description: "Win exclusive NFT rewards and rank up on leaderboards.",
            icon: faTrophy,
        },
        {
            title: "🤝 Community Farming",
            description: "Work together to achieve large-scale farming goals with special benefits.",
            icon: faHandsHelping,
        },
        {
            title: "🚜 AI Farming Assistants",
            description: "Get real-time insights, weather predictions, and crop management tips.",
            icon: faRobot,
        },
        {
            title: "📊 Adaptive Economy",
            description: "AI dynamically balances supply and demand to keep the in-game economy thriving.",
            icon: faChartLine,
        },
        {
            title: "🌿 Smart Crop Recommendations",
            description: "AI suggests the best crops to grow based on market trends.",
            icon: faSeedling,
        },
        {
            title: "🛒 Buy & Sell Digital Crops",
            description: "Trade with players or exchange for real-world produce.",
            icon: faShoppingCart,
        },
        {
            title: "🎨 NFT Customization",
            description: "Upgrade and personalize your farm with rare NFT items.",
            icon: faPaintBrush,
        },
        {
            title: "🍽️ Farm-to-Table Connection",
            description: "Your virtual harvest can be converted into real food!",
            icon: faUtensils,
        },
    ];

    return (
        <section className={styles.futureFarmVerseSection} id="future">
            <h2 className={styles.title}>🎮 The Future of FarmVerse</h2>
            <p className={styles.subtitle}>
                Explore the future of FarmVerse with **social interactions, AI-powered farming, and a thriving NFT marketplace**.
            </p>
            
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FutureFarmVerse;
