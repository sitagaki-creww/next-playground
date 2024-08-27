"use client";

import React, {
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./page.module.css";
import { useRouter } from "next/dist/client/components/navigation";
import classNames from "classnames";
import { TopicOutlined } from "@mui/icons-material";

export default function CardSpreadAnimation() {
  const title = "Card Spread Animation";
  const listRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [list, setList] = useState<{ id: string; title: string }[]>([]);
  const [resultList, setResultList] = useState<{ id: string; title: string }[]>(
    []
  );

  useEffect(() => {
    const data = [
      { id: "card1", title: "Card 1" },
      { id: "card2", title: "Card 2" },
      { id: "card3", title: "Card 3" },
      { id: "card4", title: "Card 4" },
      { id: "card5", title: "Card 5" },
      { id: "card6", title: "Card 6" },
      { id: "card7", title: "Card 7" },
      { id: "card8", title: "Card 8" },
      { id: "card9", title: "Card 9" },
    ];

    setList(data);
    setResultList(data);
  }, []);

  useEffect(() => {
    if (activeItemId) {
      const activeIndex = list.findIndex((item) => item.id === activeItemId);
      const activeElement = listRef.current[activeIndex];

      listRef.current.forEach((el, index) => {
        if (index === activeIndex && el) {
          const left = el.offsetLeft;
          const top = el.offsetTop;

          el.style.transform = `translate(-${left}px, -${top}px)`;
        } else if (el) {
          const left = el.offsetLeft;
          const top = el.offsetTop;

          el.style.transform = `translate(-${left}px, -${top}px)`;
        }
      });

      setTimeout(() => {
        setActiveItemId(null);
        listRef.current.forEach((el) => {
          if (el) {
            el.style.transform = "";
          }
        });
      }, 600);
    }
  }, [activeItemId]);

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.container}>
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              className={classNames(styles.listItem, {
                [styles.active]: item.id === activeItemId,
                [styles.inactive]: activeItemId && item.id !== activeItemId,
              })}
              ref={(el) => {
                listRef.current[index] = el;
              }}
            >
              <button
                className={styles.listItemInner}
                onClick={() => setActiveItemId(item.id)}
              >
                {/* {item.title} */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
