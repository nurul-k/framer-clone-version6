"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./UserFeedback.module.css";

const feedbacks = [
  {
    id: 1,
    company: "Acme Corp",
    logoSvg: "/images/download.svg",
    text: "Saved us 15 hours monthly on sales tax compliance. Absolutely game-changing!",
    userName: "Jamie Teller",
    userTitle: "CEO & Founder",
    userImage: "/images/jamie.avif",
  },
  {
    id: 2,
    company: "Quantum",
    logoSvg: "/images/quantum.svg",
    text: "Finally, peace of mind with automated tax calculations and filing.",
    userName: "Jordan Patels",
    userTitle: "Marketing Designer",
    userImage: "/images/jordan.avif",
  },
  {
    id: 3,
    company: "Echo Valley",
    logoSvg: "/images/echo.svg",
    text: "Seamless multi-state tax management. No more compliance headaches.",
    userName: "Taylor Kim",
    userTitle: "Marketing Designer",
    userImage: "/images/taylor.avif",
  },
];

const UserFeedback = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = feedbacks[currentFeedbackIndex];

  return (
    <section className={styles.userFeedbackContainer}>
      <p className={styles.testimonial}>Testimonials</p>
      <h1 className={styles.heading}>What our users say</h1>

      <div className={styles.testimonialSection}>
        {/* Company logo and name */}
        <div className={styles.companyInfo}>
          <Image
            src={current.logoSvg}
            alt={`${current.company} logo`}
            className={styles.companyLogo}
            width={40}
            height={40}
          />
          <span className={styles.companyName}>{current.company}</span>
        </div>

        {/* Feedback text */}
        <p className={styles.feedbackText}>{`"${current.text}"`}</p>

        {/* User info with avatar */}
        <div className={styles.userInfo}>
          <Image
            src={current.userImage}
            alt={current.userName}
            className={styles.userAvatar}
            width={48}
            height={48}
          />
          <div className={styles.userDetails}>
            <p className={styles.userName}>{current.userName}</p>
            <p className={styles.userTitle}>{current.userTitle}</p>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className={styles.navigation}>
          <button
            className={styles.navArrow}
            aria-label="Previous testimonial"
            onClick={() =>
              setCurrentFeedbackIndex((prev) =>
                prev === 0 ? feedbacks.length - 1 : prev - 1
              )
            }
          >
            ‹
          </button>
          <button
            className={styles.navArrow}
            aria-label="Next testimonial"
            onClick={() =>
              setCurrentFeedbackIndex((prev) =>
                prev === feedbacks.length - 1 ? 0 : prev + 1
              )
            }
          >
            ›
          </button>
        </div>

        {/* Pagination dots */}
        <div className={styles.paginationDots}>
          {feedbacks.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.dot} ${
                idx === currentFeedbackIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentFeedbackIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
