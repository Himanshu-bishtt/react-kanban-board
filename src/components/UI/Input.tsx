import styles from "./Input.module.css";

interface InputProps {
  name?: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
