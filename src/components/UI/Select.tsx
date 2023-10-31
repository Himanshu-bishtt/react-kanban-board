import styles from "./Select.module.css";

interface SelectProps {
  name: string;
  options: { id: number; value: string; label: string }[];
  title: "Grouping" | "Ordering" | "Theme";
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  title,
  onChange,
  selectedValue,
}) => (
  <div className={styles.item}>
    <label htmlFor={name}>{title}</label>
    <select id={name} name={name} onChange={onChange} value={selectedValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
