"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./auth.module.scss";
import PhoneInput from "@/components/PhoneInput";
import LoginButton from "@/components/LoginButton";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const regex = /^09\d{9}$/;
    if (!regex.test(phone)) {
      setError("شماره موبایل معتبر نیست.");
      return;
    }

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      setError("مشکلی در ورود پیش آمد.");
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
        <h1>ورود</h1>

        <div className={styles.inputGroup}>
          <PhoneInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="شماره موبایل:"
            placeholder="مثلاً 09123456789"
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.buttonGroup}>
          <LoginButton onClick={handleLogin}>ورود</LoginButton>
        </div>
      </form>
    </div>
  );
}
