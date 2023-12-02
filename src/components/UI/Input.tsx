import styles from "./Input.module.css";

interface InputProps {
  value: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
