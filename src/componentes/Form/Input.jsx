import React from "react";
import styles from "./Input.module.css";

function Input({
  label,
  type,
  name,
  value,
  error,
  setValue,
  onChange,
  onBlur,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
