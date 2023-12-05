import styles from "./Option.module.css";

interface OptionProps {
  options: { name: string; id: string | number }[];
  name?: string;
  value: string;
  defaultMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Option: React.FC<OptionProps> = ({ name, options, value, onChange }) => {
  return (
    <select
      name={name}
      className={styles.options}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default Option;
