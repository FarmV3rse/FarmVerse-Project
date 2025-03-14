import React from "react";
import styles from "./contact-us.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    const contacts = [
        {
            title: "Email",
            icon: faEnvelope,
            info: "support@farmverse.io",
            link: "mailto:support@farmverse.io"
        },
        {
            title: "Discord",
            icon: faComments,
            info: "Join our community",
            link: "https://discord.gg/farmverse"
        },
        {
            title: "Telegram",
            icon: faPaperPlane,
            info: "Chat with us",
            link: "https://t.me/farmverse"
        }
    ];

    return (
        <section className={styles.contactSection} id="contact">
            <h2 className={styles.title}>📩 Contact Us</h2>
            <p className={styles.subtitle}>
                Need help? Want to join the community? Reach out to us through any of the following channels.
            </p>

            <div className={styles.contactGrid}>
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                        <FontAwesomeIcon icon={contact.icon} className={styles.icon} />
                        <h3>{contact.title}</h3>
                        <p>{contact.info}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactUs;
