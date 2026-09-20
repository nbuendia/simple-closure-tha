import { HTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.css";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}
