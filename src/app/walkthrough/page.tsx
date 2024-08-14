"use client";

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

export default function Walkthrough() {
  const [step, setStep] = useState(0);
  const steps = [
    {
      id: "step1",
      title: "Step 1",
      content: "This is the first step",
    },
    {
      id: "step2",
      title: "Step 2",
      content: "This is the second step",
    },
    {
      id: "step3",
      title: "Step 3",
      content: "This is the third step",
    },
  ];
  const slidesRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const stepIndex = steps.findIndex((step) => step.id === id);
            setStep(stepIndex);
          }
        });
      },
      { threshold: 1 }
    );

    slidesRef.current.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach((slide) => {
        observer.unobserve(slide);
      });
    };
  }, []);

  const move = (_step: number, behavior: "instant" | "smooth" = "smooth") => {
    setStep(_step);
    slidesRef.current[_step].scrollIntoView({ behavior });
  };

  const next = () => {
    if (step === steps.length - 1) return;
    move(step + 1);
  };

  const prev = () => {
    if (step === 0) return;
    move(step - 1);
  };

  return (
    <>
      <style>
        {`
          html, body {
            height: 100%;
          }
        `}
      </style>
      <div className={styles.root}>
        <ul className={styles.slideList}>
          {steps.map(({ title, content }, index) => (
            <li
              id={steps[index].id}
              key={title}
              className={styles.slideListItem}
              ref={(el) => {
                slidesRef.current[index] = el!;
              }}
            >
              <h2>{title}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <div className={styles.dots}>
            {steps.map((_, index) => (
              <span
                className={
                  styles.activeDot +
                  " " +
                  styles[step === index ? "active" : ""]
                }
                key={index}
                onClick={() => move(index, "instant")}
              />
            ))}
          </div>

          <div className={styles.mainControls}>
            <a href="/">スキップ</a>
            {step < 2 && (
              <button className={styles.nextButton} onClick={() => next()}>
                進む
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
