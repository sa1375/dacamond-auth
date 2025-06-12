"use client";

import styles from "@/styles/PhoneInput.module.scss";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
}

const PhoneInput: React.FC<Props> = ({ value, onChange, label, placeholder }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="phone">{label}</label>
      <input
        type="text"
        id="phone"
        placeholder={placeholder}
        value={value}
        onChange={onChange}  // Changed this line
      />
    </div>
  );
};

export default PhoneInput;