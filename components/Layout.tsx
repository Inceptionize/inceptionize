import React, { ReactElement } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
