"use client";

import React from "react";
import styles from "@/styles/LoginButton.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const LoginButton: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      ورود
    </button>
  );
};

export default LoginButton;
